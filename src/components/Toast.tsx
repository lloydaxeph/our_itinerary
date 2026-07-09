interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      role="status"
      className="toast fixed left-1/2 z-[60] max-w-[88vw] -translate-x-1/2 rounded-xl px-[18px] py-3 text-center text-[13.5px] transition-all duration-200"
      style={{
        bottom: 90,
        opacity: message ? 1 : 0,
        transform: `translateX(-50%) translateY(${message ? 0 : 16}px)`,
        pointerEvents: "none",
      }}
    >
      {message}
    </div>
  );
}
