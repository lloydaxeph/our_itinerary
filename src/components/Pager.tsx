import type { Day } from "../types";

interface PagerProps {
  days: Day[];
  current: number;
  onGoTo: (index: number) => void;
}

export function Pager({ days, current, onGoTo }: PagerProps) {
  const atStart = current === 0;
  const atEnd = current === days.length - 1;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-1.5 pointer-events-none"
      style={{
        padding: "10px 0 calc(env(safe-area-inset-bottom, 0px) + 12px)",
        background: "linear-gradient(to top, rgba(247,243,234,.96) 60%, rgba(247,243,234,0))",
      }}
    >
      <div className="flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          aria-label="Previous day"
          disabled={atStart}
          onClick={() => onGoTo(current - 1)}
          className="pager-nav focus-ring flex items-center justify-center w-7 h-7 rounded-full text-[16px] font-bold leading-none disabled:opacity-30"
        >
          ‹
        </button>
        <div className="flex gap-[7px]">
          {days.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "on" : ""}`} />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next day"
          disabled={atEnd}
          onClick={() => onGoTo(current + 1)}
          className="pager-nav focus-ring flex items-center justify-center w-7 h-7 rounded-full text-[16px] font-bold leading-none disabled:opacity-30"
        >
          ›
        </button>
      </div>
      <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">
        Day {current + 1} of {days.length} · {days[current]?.city}
      </div>
      <div className="w-full px-3 text-right text-[9px] text-ink-soft/60">
        © 2026 Axe Technologies. All rights reserved.
      </div>
    </div>
  );
}
