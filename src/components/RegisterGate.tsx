import { useState } from "react";
import { register } from "../lib/api";

interface RegisterGateProps {
  onRegistered: (username: string) => void;
}

export function RegisterGate({ onRegistered }: RegisterGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Enter a username to continue.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const res = await register(trimmed);
      onRegistered(res.username);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-paper px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[340px] rounded-card bg-white border border-line shadow-card p-6 flex flex-col gap-4"
      >
        <div>
          <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">
            Vietnam · Nov 4–10
          </div>
          <h1 className="text-xl font-bold font-serif">Who's picking?</h1>
          <p className="text-[13px] text-ink-soft mt-1">
            Pick a username so we know whose votes are whose. No password needed.
          </p>
        </div>
        <input
          autoFocus
          type="text"
          inputMode="text"
          maxLength={32}
          placeholder="e.g. lloyd"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="focus-ring min-h-11 px-3.5 rounded-xl border border-line bg-paper text-[15px]"
          aria-label="Username"
        />
        {error && <p className="text-[13px] text-han-deep">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="focus-ring min-h-11 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
        >
          {busy ? "Joining…" : "Continue"}
        </button>
      </form>
    </div>
  );
}
