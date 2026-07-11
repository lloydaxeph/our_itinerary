import { useState } from "react";
import type { Activity, City } from "../types";
import { Gallery } from "./Gallery";

interface ActivityCardProps {
  activity: Activity;
  city: City;
  selected: boolean;
  onToggleSelected: (on: boolean) => void;
}

export function ActivityCard({ activity, city, selected, onToggleSelected }: ActivityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const googleImagesUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
    `${activity.n} ${city} Vietnam`,
  )}`;
  const googleMapsUrl = activity.loc
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.loc)}`
    : null;

  function toggleExpand(e: { stopPropagation?: () => void }) {
    e.stopPropagation?.();
    setExpanded((v) => !v);
  }

  return (
    <div
      className={`activity-card focus-ring flex flex-wrap items-stretch gap-2.5 rounded-card px-3 py-3 pl-2 mb-2.5 cursor-pointer select-none ${
        selected ? "selected" : ""
      } ${expanded ? "expanded" : ""}`}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onClick={toggleExpand}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleExpand(e);
        }
      }}
    >
      <div className="activity-thumb flex-none w-20 h-20 self-center rounded-lg overflow-hidden bg-black/[.06]">
        {activity.thumb ? (
          <img
            src={activity.thumb}
            alt=""
            loading="lazy"
            onError={(e) => e.currentTarget.remove()}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl opacity-40" aria-hidden="true">
            🖼️
          </div>
        )}
      </div>

      <div className="main flex-1 min-w-0 flex flex-col justify-center gap-[3px]">
        <div className="flex items-center gap-[7px] text-[15px] font-bold leading-tight">
          <span>{activity.n}</span>
        </div>
        <div className="activity-desc text-[12.5px] leading-snug text-ink-soft">{activity.d}</div>
        <div className="flex items-center gap-2.5 flex-wrap">
          {googleMapsUrl && (
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
              onClick={(e) => e.stopPropagation()}
            >
              Open in maps 📍
            </a>
          )}
          {activity.website && (
            <a
              href={activity.website}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-more focus-ring self-start inline-block text-[12px] font-bold pb-px"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Page 🌐
            </a>
          )}
        </div>
      </div>

      <label
        className="flex-none w-11 min-h-11 self-center flex items-center justify-center cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          className="cb"
          checked={selected}
          aria-label={`Select ${activity.n}`}
          onChange={(e) => onToggleSelected(e.target.checked)}
        />
      </label>

      <div className={`basis-full ${expanded ? "block" : "hidden"}`}>
        <Gallery
          name={activity.n}
          images={activity.im ?? []}
          googleImagesUrl={googleImagesUrl}
          selected={selected}
        />
      </div>

      <div
        className="expandbar basis-full flex items-center justify-center gap-1.5 min-h-[26px] mt-1.5 rounded-b-xl"
        style={{ margin: "6px -12px -12px -14px" }}
        aria-hidden="true"
        onClick={toggleExpand}
      >
        <span className="text-[11px] font-semibold">Images</span>
        <span className="arrow text-[8px]">▼</span>
      </div>
    </div>
  );
}
