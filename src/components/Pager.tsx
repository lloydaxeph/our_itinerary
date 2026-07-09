import type { Day } from "../types";

interface PagerProps {
  days: Day[];
  current: number;
}

export function Pager({ days, current }: PagerProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-1.5 pointer-events-none"
      style={{
        padding: "10px 0 calc(env(safe-area-inset-bottom, 0px) + 12px)",
        background: "linear-gradient(to top, rgba(247,243,234,.96) 60%, rgba(247,243,234,0))",
      }}
    >
      <div className="flex gap-[7px]">
        {days.map((_, i) => (
          <span key={i} className={`dot ${i === current ? "on" : ""}`} />
        ))}
      </div>
      <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">
        Day {current + 1} of {days.length} · {days[current]?.city}
      </div>
    </div>
  );
}
