import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ActivityId, Day } from "../types";
import { DayPage } from "./DayPage";

interface BookProps {
  days: Day[];
  isSelected: (id: ActivityId) => boolean;
  onToggle: (id: ActivityId, on: boolean) => void;
  onPageChange: (index: number) => void;
}

export interface BookHandle {
  goTo: (index: number) => void;
}

export const Book = forwardRef<BookHandle, BookProps>(function Book(
  { days, isSelected, onToggle, onPageChange },
  ref,
) {
  const elRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    goTo(index: number) {
      const el = elRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(days.length - 1, index));
      el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    },
  }));

  function handleScroll() {
    const el = elRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    onPageChange(i);
  }

  return (
    <div
      ref={elRef}
      id="book"
      className="book no-scrollbar"
      aria-label="Itinerary pages, swipe left and right"
      onScroll={handleScroll}
    >
      {days.map((day, i) => (
        <DayPage key={day.date} day={day} dayIndex={i} isSelected={isSelected} onToggle={onToggle} />
      ))}
    </div>
  );
});
