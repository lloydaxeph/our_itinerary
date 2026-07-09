export function Watermark() {
  return (
    <div
      className="fixed z-40 text-[10px] tracking-wide text-ink-soft/60 pointer-events-none select-none"
      style={{
        right: "calc(env(safe-area-inset-right, 0px) + 10px)",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 6px)",
      }}
    >
      © 2026 Axe Technologies
    </div>
  );
}
