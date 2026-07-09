import type { ActivityId, City, TimeBlock } from "../types";
import { ActivityCard } from "./ActivityCard";
import { TransitStrip } from "./TransitStrip";

interface TimeBlockSectionProps {
  block: TimeBlock;
  city: City;
  dayIndex: number;
  blockIndex: number;
  isSelected: (id: ActivityId) => boolean;
  onToggle: (id: ActivityId, on: boolean) => void;
}

export function TimeBlockSection({
  block,
  city,
  dayIndex,
  blockIndex,
  isSelected,
  onToggle,
}: TimeBlockSectionProps) {
  return (
    <div className="mt-[22px]">
      <div className="block-head flex items-center gap-2.5 mb-2.5">
        <span className="time-chip font-mono text-xs font-bold tracking-wide rounded-lg px-2.5 py-1.5 whitespace-nowrap">
          {block.time}
        </span>
        <span className="text-[13px] text-ink-soft">{block.label}</span>
      </div>
      {block.transit && <TransitStrip text={block.transit} />}
      {block.items.map((item, itemIndex) => {
        const id = `${dayIndex}-${blockIndex}-${itemIndex}`;
        return (
          <ActivityCard
            key={id}
            activity={item}
            city={city}
            selected={isSelected(id)}
            onToggleSelected={(on) => onToggle(id, on)}
          />
        );
      })}
    </div>
  );
}
