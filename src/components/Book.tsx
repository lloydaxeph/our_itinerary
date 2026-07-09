import { useRef } from "react";
import type { ActivityId, Day } from "../types";
import { DayPage } from "./DayPage";

interface BookProps {
  days: Day[];
  isSelected: (id: ActivityId) => boolean;
  onToggle: (id: ActivityId, on: boolean) => void;
  onPageChange: (index: number) => void;
}

export function Book({ days, isSelected, onToggle, onPageChange }: BookProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleScroll() {
    const el = ref.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    onPageChange(i);
  }

  return (
    <div
      ref={ref}
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
}
