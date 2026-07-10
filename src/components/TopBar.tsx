import { useEffect, useRef } from "react";

interface TopBarProps {
  username: string;
  count: number;
  submitting: boolean;
  onSubmit: () => void;
  onLogout: () => void;
}

export function TopBar({ username, count, submitting, onSubmit, onLogout }: TopBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    // iOS Safari can mount a fixed element with a stale safe-area/viewport
    // snapshot right after a client-side login transition; forcing a reflow
    // on the next frame makes it recompute against the settled viewport.
    requestAnimationFrame(() => {
      el.style.display = "none";
      void el.offsetHeight;
      el.style.display = "";
    });
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between pointer-events-none"
      style={{
        padding: "calc(var(--safe-top) + 10px) 14px 10px 16px",
        background:
          "linear-gradient(to bottom, rgba(247,243,234,.96) 55%, rgba(247,243,234,0))",
      }}
    >
      <div className="pointer-events-auto">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onLogout}
            aria-label="Switch user / log out"
            className="focus-ring text-[11px] leading-none text-ink-soft active:opacity-70"
          >
            ✕
          </button>
          <span className="text-[11px] tracking-[.14em] uppercase text-ink-soft">
            {username}
          </span>
        </div>
        <div className="text-[15px] font-bold font-serif">Vietnam 2026</div>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <a
          href="/results"
          aria-label="View vote results"
          className="focus-ring flex items-center min-h-11 px-3.5 rounded-full border border-line bg-paper/80 text-ink text-sm font-semibold tracking-wide active:scale-[.97]"
        >
          Results
        </a>
        <button
          type="button"
          aria-label="Submit selected places"
          onClick={onSubmit}
          disabled={submitting}
          className="focus-ring flex items-center gap-[7px] min-h-11 px-4 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit"}
          {count > 0 && (
            <span className="min-w-[22px] h-[22px] px-1.5 flex items-center justify-center bg-paper text-ink rounded-full text-xs font-extrabold">
              {count}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
