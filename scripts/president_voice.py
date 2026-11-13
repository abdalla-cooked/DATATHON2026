"""
Mission Control Live: voice the President's lines in the "Presidential visit" scene (web/src/lib/president.js)
with a local voice clone (Chatterbox, open source, runs on the GPU). No ElevenLabs, no API key.

The scene is fixed, so the clips are made once and shipped as static files:
  writes web/public/audio/president/NN_<hash>.mp3 + manifest.json, which narration.js plays for PRESIDENT lines.
A clip is named after a hash of its line, so editing a line in president.js only re-renders that line.

ElevenLabs acts out [delivery tags]; Chatterbox can't read them, so each tag becomes settings for the words after it:
  exaggeration (how theatrical), cfg_weight (lower = slower, more drawn out), and [pausing for effect] = a real pause.

Setup (separate venv; needs an NVIDIA GPU):
    uv venv -p 3.11 .venv-tts
    uv pip install --native-tls -p .venv-tts chatterbox-tts truststore --index-strategy unsafe-best-match \
        --extra-index-url https://download.pytorch.org/whl/cu124
Run from the repo root:
    .venv-tts/Scripts/python scripts/president_voice.py --ref path/to/impression.mp3
    ... --only 5 9 --force      # re-roll just those lines (indices into PRESIDENT_SCENE)
    ... --seed 7                # different take of everything
The reference recording is someone's real voice: keep it out of the repo.
"""
import argparse
import hashlib
import json
import re
import subprocess
from pathlib import Path

try:   # antivirus HTTPS scanning (e.g. Norton) breaks the model download without the Windows certificate store
    import truststore
    truststore.inject_into_ssl()
except ImportError:
    pass

ROOT = Path(__file__).resolve().parent.parent
SCENE_JS = ROOT / "web/src/lib/president.js"
OUT = ROOT / "web/public/audio/president"
SR_OUT = 44100

# tag keyword -> (exaggeration, cfg_weight). First match wins; anything else gets DEFAULT.
STYLES = [
    (r"drawn out|smug", (0.85, 0.3)),
    (r"serious|quieter|leaning in|squinting", (0.45, 0.45)),
    (r"proud|impressed|pointing|frustrated|waving", (0.75, 0.4)),
]
DEFAULT = (0.65, 0.45)
PAUSE_S = 0.7      # [pausing for effect]
GAP_S = 0.18       # between segments of one line
MIN_SEG = 18       # very short segments make the model ramble, so they join the next one


def president_lines():
    src = SCENE_JS.read_text(encoding="utf-8")
    scene = re.findall(r"\[\s*'(\w+)'\s*,\s*([\"'])(.*?)\2\s*\]", src)
    return [(i, text) for i, (who, _, text) in enumerate(scene) if who == "PRESIDENT"]


def segments(text):
    """'[smug] A. [pausing for effect] B.' -> [(settings, pause_before, 'A.'), ...]"""
    parts = re.split(r"\[([^\]]*)\]", text)   # ['', tag, words, tag, words, ...]
    segs, style, pause = [], DEFAULT, 0.0
    if parts[0].strip():
        segs.append([style, 0.0, parts[0].strip()])
    for tag, words in zip(parts[1::2], parts[2::2]):
        tag = tag.lower()
        if "pausing" in tag:
            pause = PAUSE_S
        style = next((s for pat, s in STYLES if re.search(pat, tag)), style if "pausing" in tag else DEFAULT)
        if words.strip():
            segs.append([style, pause, words.strip()])
            pause = 0.0
    merged = []
    for seg in segs:   # glue a too-short segment onto the next one
        if merged and len(merged[-1][2]) < MIN_SEG:
            merged[-1][2] += " " + seg[2]
        else:
            merged.append(seg)
    return merged


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ref", required=True, help="clean recording of the impression (the first ~10 s matter most)")
    ap.add_argument("--only", type=int, nargs="*", help="scene indices to render")
    ap.add_argument("--force", action="store_true", help="re-render even if the clip exists")
    ap.add_argument("--seed", type=int, default=1)
    args = ap.parse_args()

    import torch
    import torchaudio
    from chatterbox.tts import ChatterboxTTS

    OUT.mkdir(parents=True, exist_ok=True)
    model = ChatterboxTTS.from_pretrained(device="cuda" if torch.cuda.is_available() else "cpu")
    model.prepare_conditionals(args.ref)

    manifest = {}
    for i, text in president_lines():
        name = f"{i:02d}_{hashlib.sha1(text.encode()).hexdigest()[:10]}.mp3"
        manifest[str(i)] = {"text": text, "src": f"audio/president/{name}"}
        path = OUT / name
        if (args.only and i not in args.only) or (path.exists() and not args.force):
            continue
        torch.manual_seed(args.seed + i)
        pieces = []
        for (exag, cfg), pause, words in segments(text):
            silence = torch.zeros(1, int(model.sr * (pause or GAP_S)))
            wav = model.generate(words, exaggeration=exag, cfg_weight=cfg)
            pieces += [silence, wav.cpu()]
        wav = torch.cat(pieces[1:], dim=1)   # no silence before the first words
        tmp = path.with_suffix(".wav")
        torchaudio.save(str(tmp), wav, model.sr)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(tmp), "-af", "loudnorm=I=-16:TP=-1.5",
                        "-ar", str(SR_OUT), "-b:a", "128k", str(path)], check=True)
        tmp.unlink()
        print(f"[{i:2d}] {wav.shape[1] / model.sr:5.1f}s  {path.name}")

    for old in OUT.glob("*.mp3"):   # clips of lines that were edited away
        if f"audio/president/{old.name}" not in {m["src"] for m in manifest.values()}:
            old.unlink()
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"manifest: {len(manifest)} lines -> {OUT / 'manifest.json'}")


if __name__ == "__main__":
    main()
