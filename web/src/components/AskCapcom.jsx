// Ask CAPCOM: a chat panel where visitors talk to CAPCOM about the data and what the models learned (api/chat).
// Only shown where the API is up and has a Claude key (api/health `chat`), so it stays hidden on GitHub Pages.
import { useEffect, useRef, useState } from 'react';
import './AskCapcom.css';

const SUGGESTED = [
  'What did the model learn?',
  "What's your coolest asteroid?",
  'Is anything going to hit Earth?',
  'Where does Model B get it wrong?',
];
const GREETING = { role: 'assistant', content: "CAPCOM here. Ask me anything about these 42,704 asteroids or what our models "
  + 'learned. The intern is on snack duty, so you have my full attention.' };

export default function AskCapcom() {
  const [available, setAvailable] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch('api/health').then((r) => (r.ok ? r.json() : null)).then((h) => setAvailable(Boolean(h?.chat))).catch(() => {});
  }, []);
  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' }); }, [messages, busy]);
  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!available) return null;

  const ask = async (text) => {
    const q = text.trim().slice(0, 1000);
    if (!q || busy) return;
    const next = [...messages, { role: 'user', content: q }];
    setMessages(next);
    setDraft('');
    setError(null);
    setBusy(true);
    try {
      const r = await fetch('api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || !data.reply) throw new Error(data.error || `error ${r.status}`);
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(r429(err.message) ? 'Too many questions at once. Give CAPCOM a minute.' : 'Lost the signal to CAPCOM. Try again.');
      setMessages((m) => m.slice(0, -1));          // put the question back in the box so it can be resent
      setDraft(q);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  };

  const onSubmit = (e) => { e.preventDefault(); ask(draft); };
  const asked = messages.some((m) => m.role === 'user');

  return (
    <>
      <button type="button" className={`ac-toggle${open ? ' open' : ''}`} aria-expanded={open} aria-controls="ask-capcom"
              onClick={() => setOpen((o) => !o)}>
        {open ? 'Close chat' : '🎙️ Ask CAPCOM'}
      </button>
      {open && (
        <section id="ask-capcom" className="ac-panel" aria-label="Ask CAPCOM">
          <header className="ac-head">
            <b>Ask CAPCOM</b>
            <span>Mission Control, live</span>
            <button type="button" className="ac-close" aria-label="Close chat" onClick={() => setOpen(false)}>×</button>
          </header>
          <div className="ac-list" ref={listRef} role="log" aria-live="polite">
            {messages.map((m, i) => (
              <p key={i} className={`ac-msg ${m.role}`}>
                {m.role === 'assistant' && <b>CAPCOM</b>}
                {m.content}
              </p>
            ))}
            {busy && <p className="ac-msg assistant typing"><b>CAPCOM</b><span className="ac-dots"><i /><i /><i /></span></p>}
            {!asked && !busy && (
              <div className="ac-suggest">
                {SUGGESTED.map((s) => <button type="button" key={s} onClick={() => ask(s)}>{s}</button>)}
              </div>
            )}
          </div>
          {error && <p className="ac-error" role="alert">{error}</p>}
          <form className="ac-form" onSubmit={onSubmit}>
            <input ref={inputRef} value={draft} onChange={(e) => setDraft(e.target.value)} maxLength={1000}
                   placeholder="Ask about an asteroid or the model…" aria-label="Your question" />
            <button type="submit" disabled={busy || !draft.trim()}>Send</button>
          </form>
          <p className="ac-note">Risk scores aren't probabilities, and "potentially hazardous" doesn't mean it will hit.</p>
        </section>
      )}
    </>
  );
}

const r429 = (msg) => /too many|rate limited/.test(msg);
