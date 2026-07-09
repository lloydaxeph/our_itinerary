interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 px-6"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
    >
      <div className="w-full max-w-[340px] rounded-card bg-white border border-line shadow-card p-6 flex flex-col gap-4">
        <h2 id="confirm-title" className="text-lg font-bold font-serif">
          {title}
        </h2>
        <p className="text-[13.5px] text-ink-soft">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="focus-ring min-h-11 px-4 rounded-full border border-line text-sm font-semibold active:scale-[.97]"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="focus-ring min-h-11 px-4 rounded-full bg-ink text-paper text-sm font-semibold shadow-card active:scale-[.97]"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
