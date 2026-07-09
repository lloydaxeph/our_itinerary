interface TopBarProps {
  username: string;
  count: number;
  submitting: boolean;
  onSubmit: () => void;
}

export function TopBar({ username, count, submitting, onSubmit }: TopBarProps) {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between pointer-events-none"
      style={{
        padding: "calc(env(safe-area-inset-top, 0px) + 10px) 14px 10px 16px",
        background:
          "linear-gradient(to bottom, rgba(247,243,234,.96) 55%, rgba(247,243,234,0))",
      }}
    >
      <div className="pointer-events-auto">
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">{username}</div>
        <div className="text-[15px] font-bold font-serif">Hanoi &amp; Sapa</div>
      </div>
      <button
        type="button"
        aria-label="Submit selected places"
        onClick={onSubmit}
        disabled={submitting}
        className="focus-ring pointer-events-auto flex items-center gap-[7px] min-h-11 px-4 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit"}
        {count > 0 && (
          <span className="min-w-[22px] h-[22px] px-1.5 flex items-center justify-center bg-paper text-ink rounded-full text-xs font-extrabold">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
