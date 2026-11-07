"""
P1 -- Mission Control Live: generate the two-voice ElevenLabs commentary (PLAN.md section 8).

Reads  narration/lines.json (the script), web/public/data/asteroids.json + metrics.json (the model outputs).
Writes web/public/audio/*.mp3 and web/public/audio/manifest.json, which web/src/lib/narration.js plays.

Every spoken line is its own clip, named after a hash of (speaker, text), so:
  * a line shared by many dialogues ("Oh no. Oh no no no.") is generated and paid for once,
  * editing one line in lines.json only regenerates that line,
  * reruns cost nothing for clips that already exist.

The audio is made ahead of time on purpose: the site is public, so the API key must never reach it.

Run from the repo root (after scripts/train.py):
    python scripts/narrate.py --dry-run          # print the dialogues + character count, no API calls
    python scripts/narrate.py                    # generate everything
    python scripts/narrate.py --limit 10         # only the first 10 asteroids (cheap test)
.env needs: ELEVENLABS_API_KEY, CAPCOM_VOICE_ID, INTERN_VOICE_ID
"""
import argparse
import hashlib
import json
import os
import random
import sys

import pandas as pd

try:   # use the Windows certificate store, so antivirus HTTPS scanning (e.g. Norton) doesn't break SSL
    import truststore
    truststore.inject_into_ssl()
except ImportError:
    pass

MODEL_ID = "eleven_multilingual_v2"
SFX_MODEL_ID = "eleven_text_to_sound_v2"
OUT_FORMAT = "mp3_44100_128"
HIROSHIMA_MT = 0.015
PRESETS = ["Apophis", "Bennu", "Didymos"]


# ------------------------------------------------------------------ spoken numbers
def tier(p, thr):
    """Same tiers as the site: below 0.2 chill, below Model B's cutoff sus, above it screwed."""
    return "chill" if p < 0.2 else "sus" if p < thr else "screwed"


def round_sig(x, sig=2):
    """1234 -> 1200, 9390 -> 9400 (as a plain number, never scientific notation)."""
    return float(f"{x:.{sig}g}")


def say_big(n):
    """Speakable: 52000 -> '52 thousand', 630000 -> '630 thousand', 1.2e6 -> '1.2 million'."""
    for size, word in ((1e9, "billion"), (1e6, "million"), (1e3, "thousand")):
        if n >= size:
            return f"{round_sig(n / size):g} {word}"
    return f"{round_sig(n):g}"


def say_energy(mt):
    return f"{say_big(mt * 1000)} kilotons" if mt < 1 else f"{say_big(mt)} megatons"


def short_name(full):
    """'99942 Apophis (2004 MN4)' -> 'Apophis', '(2019 UQ7)' -> '2019 UQ7', '411165 (2010 DF1)' -> '2010 DF1'."""
    head = full.split("(")[0].strip()
    paren = full[full.find("(") + 1:full.rfind(")")].strip() if "(" in full else ""
    parts = head.split(" ", 1)
    if len(parts) == 2 and parts[0].isdigit():
        return parts[1]
    if head.isdigit() and paren:                               # numbered but unnamed: the designation reads better
        return paren
    return head or paren or full


# ------------------------------------------------------------------ dialogue builders
def report(a, L, thr, rng):
    t = tier(a["pB"], thr)
    why = rng.choice(L["why"].get(a["why"], ["of the shape of its orbit"]))
    lines = [("CAPCOM", L["report"]["open"].format(name=short_name(a["name"]), risk=round(a["pB"] * 100))),
             ("INTERN", rng.choice(L["report"]["react"][t])),
             ("CAPCOM", L["report"]["because"].format(why=why))]
    close = L["report"]["close"][t]
    lines += close if t == "screwed" else [rng.choice(close)]
    if (t == "screwed") != (a["pha"] == 1):                   # the model disagrees with NASA
        lines += L["report"]["nasa_disagrees"]
    return t, [tuple(x) for x in lines]


def hidden(a, L):
    size = a["D_meas"] if pd.notna(a.get("D_meas")) else a["D_pred"]
    return [(s, x.format(name=short_name(a["name"]), size=int(round(size, -1)))) for s, x in L["hidden"]]


def whatif(a, L):
    e = a["E_mt"]
    return [(s, x.format(name=short_name(a["name"]), speed=round(a["v_imp"]), energy=say_energy(e),
                         hiroshimas=say_big(e / HIROSHIMA_MT))) for s, x in L["whatif"]]


def pick_asteroids(ast, metrics, limit):
    """Presets + Act 4 top hidden hazards + worst misses + highest-risk unseen PHAs (~65 total)."""
    parts = [ast[ast["name"].str.contains("|".join(PRESETS))]]
    if "hidden" in ast:
        top = {r["name"] for r in metrics.get("hidden_hazards", {}).get("top", [])}
        h = ast[ast["hidden"] == True]
        parts += [h[h["name"].isin(top)], h.sort_values("D_lo", ascending=False).head(15)]
    parts.append(ast[ast["name"].isin([m["name"] for m in metrics.get("worst_misses", [])])])
    parts.append(ast[ast["test"] & (ast["pha"] == 1)].nlargest(40, "pB"))
    picks = pd.concat(parts).drop_duplicates("pdes")
    return picks.head(limit) if limit else picks


# ------------------------------------------------------------------ audio
def clip_key(speaker, text):
    return f"{speaker.lower()}_{hashlib.sha1(f'{speaker}|{text}'.encode()).hexdigest()[:10]}"


class Studio:
    def __init__(self, out_dir, voices, settings, dry):
        self.out_dir, self.voices, self.settings, self.dry = out_dir, voices, settings, dry
        self.todo, self.chars = {}, 0
        self.client = None
        if not dry:
            from dotenv import load_dotenv
            from elevenlabs.client import ElevenLabs
            load_dotenv()
            key = os.environ.get("ELEVENLABS_API_KEY", "")
            missing = [n for n in ("ELEVENLABS_API_KEY", "CAPCOM_VOICE_ID", "INTERN_VOICE_ID") if not os.environ.get(n)]
            if missing or key.startswith("sk_..."):
                sys.exit(f"Missing in .env: {', '.join(missing) or 'a real ELEVENLABS_API_KEY'} (see .env.example)")
            self.client = ElevenLabs(api_key=key)
            self.voices = {s: os.environ[f"{s}_VOICE_ID"] for s in ("CAPCOM", "INTERN")}

    def line(self, speaker, text):
        """Queue one spoken line; returns its web path."""
        key = clip_key(speaker, text)
        path = os.path.join(self.out_dir, f"{key}.mp3")
        if key not in self.todo and not os.path.exists(path):
            self.todo[key] = (speaker, text)
            self.chars += len(text)
        return f"audio/{key}.mp3"

    def dialogue(self, lines):
        return [{"who": s, "text": x, "src": self.line(s, x)} for s, x in lines]

    def render(self):
        from elevenlabs import VoiceSettings
        for n, (key, (speaker, text)) in enumerate(self.todo.items(), 1):
            audio = self.client.text_to_speech.convert(
                self.voices[speaker], text=text, model_id=MODEL_ID, output_format=OUT_FORMAT,
                voice_settings=VoiceSettings(**self.settings[speaker]))
            with open(os.path.join(self.out_dir, f"{key}.mp3"), "wb") as f:
                for chunk in audio:
                    f.write(chunk)
            print(f"  [{n}/{len(self.todo)}] {speaker}: {text}")

    def sfx(self, name, spec):
        path = os.path.join(self.out_dir, f"sfx_{name}.mp3")
        if not self.dry and not os.path.exists(path):
            audio = self.client.text_to_sound_effects.convert(text=spec["text"], duration_seconds=spec["seconds"],
                                                              model_id=SFX_MODEL_ID, output_format=OUT_FORMAT)
            with open(path, "wb") as f:
                for chunk in audio:
                    f.write(chunk)
            print(f"  sfx {name}")
        return f"audio/sfx_{name}.mp3"


def write_live_script(L, path):
    """Live commentary builds lines from the same script, so ship it to the site as a JS module (no API calls)."""
    with open(path, "w", encoding="utf-8") as f:
        f.write("// GENERATED by scripts/narrate.py from narration/lines.json -- edit that file, not this one.\n")
        f.write(f"export default {json.dumps(L, indent=1, ensure_ascii=False)};\n")


# ------------------------------------------------------------------ main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lines", default="narration/lines.json")
    ap.add_argument("--data", default="web/public/data")
    ap.add_argument("--out", default="web/public/audio")
    ap.add_argument("--live-script", default="web/src/lib/lines.js",
                    help="copy of the script as a JS module, for live commentary (web/api/say.js + the player)")
    ap.add_argument("--limit", type=int, default=0, help="only the first N asteroids (cheap test run)")
    ap.add_argument("--dry-run", action="store_true", help="print dialogues + character count, no API calls")
    args = ap.parse_args()

    L = json.load(open(args.lines, encoding="utf-8"))
    write_live_script(L, args.live_script)
    ast = pd.DataFrame(json.load(open(os.path.join(args.data, "asteroids.json"), encoding="utf-8")))
    metrics = json.load(open(os.path.join(args.data, "metrics.json"), encoding="utf-8"))
    for col in ("why", "E_mt", "v_imp"):
        if col not in ast:
            sys.exit(f"asteroids.json has no '{col}' field. Rerun scripts/train.py first.")
    thr = metrics["B"]["threshold"]
    os.makedirs(args.out, exist_ok=True)
    studio = Studio(args.out, None, L["voices"], args.dry_run)
    fill = dict(hidden_count=metrics.get("hidden_hazards", {}).get("count", "hundreds of"))

    manifest = {"tiers": {"chill": 0.2, "screwed": thr},
                "acts": {k: studio.dialogue([(s, x.format(**fill)) for s, x in v]) for k, v in L["acts"].items()},
                "reactions": {k: studio.dialogue(v) for k, v in L["reactions"].items()},
                "sfx": {k: studio.sfx(k, v) for k, v in L["sfx"].items()},
                "asteroids": {}}

    picks = pick_asteroids(ast, metrics, args.limit)
    for _, a in picks.iterrows():
        rng = random.Random(a["pdes"])                             # same jokes every run for the same asteroid
        t, rep = report(a, L, thr, rng)
        entry = {"tier": t, "report": studio.dialogue(rep)}
        if a.get("hidden") == True:
            entry["hidden"] = studio.dialogue(hidden(a, L))
        if pd.notna(a.get("E_mt")):
            entry["whatif"] = studio.dialogue(whatif(a, L))
        manifest["asteroids"][a["pdes"]] = entry

    print(f"{len(picks)} asteroids | {len(studio.todo)} new clips | {studio.chars:,} characters to generate "
          f"| {len(L['sfx'])} sound effects")
    if args.dry_run:
        for pdes in list(manifest["asteroids"])[:3]:
            e = manifest["asteroids"][pdes]
            for part in ("report", "hidden", "whatif"):
                if part in e:
                    print(f"\n--- {pdes} {part} ({e['tier']})")
                    for x in e[part]:
                        print(f"  {x['who']:>6}: {x['text']}")
        print("\n(dry run: nothing generated, manifest not written)")
        return

    studio.render()
    with open(os.path.join(args.out, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=1, ensure_ascii=False)
    print(f"  {os.path.join(args.out, 'manifest.json')} written")


if __name__ == "__main__":
    main()
