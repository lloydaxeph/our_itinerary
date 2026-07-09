import type { ActivityId, Day } from "../types";
import { TicketHeader } from "./TicketHeader";
import { TimeBlockSection } from "./TimeBlockSection";

interface DayPageProps {
  day: Day;
  dayIndex: number;
  isSelected: (id: ActivityId) => boolean;
  onToggle: (id: ActivityId, on: boolean) => void;
}

export function DayPage({ day, dayIndex, isSelected, onToggle }: DayPageProps) {
  const cityClass = day.city === "Sapa" ? "page-sapa" : "page-hanoi";
  return (
    <section className={`page ${cityClass}`} data-index={dayIndex}>
      <TicketHeader day={day} dayNumber={dayIndex + 1} />
      <p
        className="text-[13px] leading-relaxed text-ink-soft mt-3 mx-0.5 mb-1 [&_b]:text-ink"
        dangerouslySetInnerHTML={{ __html: day.note }}
      />
      {day.blocks.map((block, blockIndex) => (
        <TimeBlockSection
          key={blockIndex}
          block={block}
          city={day.city}
          dayIndex={dayIndex}
          blockIndex={blockIndex}
          isSelected={isSelected}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}
