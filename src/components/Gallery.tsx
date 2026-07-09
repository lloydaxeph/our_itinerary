import { useEffect, useRef, useState } from "react";
import { IMG_COUNT, loadActivityImages } from "../lib/images";
import type { ImageResult } from "../types";

type LoadState = "idle" | "loading" | "done" | "error";

interface GalleryProps {
  name: string;
  city: string;
  googleImagesUrl: string;
  selected: boolean;
  expanded: boolean;
}

export function Gallery({ name, city, googleImagesUrl, selected, expanded }: GalleryProps) {
  const [state, setState] = useState<LoadState>("idle");
  const [images, setImages] = useState<ImageResult[]>([]);
  const loadedOnce = useRef(false);

  useEffect(() => {
    if (!expanded || loadedOnce.current) return;
    loadedOnce.current = true;
    setState("loading");
    loadActivityImages(name, city)
      .then((imgs) => {
        setImages(imgs);
        setState("done");
      })
      .catch(() => {
        loadedOnce.current = false; // allow retry on next expand
        setState("error");
      });
  }, [expanded, name, city]);

  const statusText =
    state === "loading"
      ? "Loading photos…"
      : state === "error"
        ? "Couldn't load photos — check your connection, or use the link below."
        : state === "done" && images.length === 0
          ? "No photos found for this one — try the link below."
          : "";

  return (
    <div
      className={`pt-2.5 border-t border-dashed ${selected ? "border-white/35" : "border-line"}`}
    >
      {statusText && (
        <div className={`gallery-status text-xs mb-2 ${selected ? "" : "text-ink-soft"}`}>
          {statusText}
        </div>
      )}
      <div className="gallery-imgs no-scrollbar flex gap-1.5 overflow-x-auto -mx-3.5 px-3.5">
        {state === "loading" &&
          Array.from({ length: IMG_COUNT }).map((_, i) => (
            <div key={i} className="gallery-ph flex-none w-[150px] h-[110px] rounded-lg bg-black/[.08]" />
          ))}
        {state === "done" &&
          images.map((img, i) => (
            <img
              key={i}
              loading="lazy"
              alt={name}
              src={img.src}
              onError={(e) => {
                const el = e.currentTarget;
                if (img.fallback && el.src !== img.fallback) el.src = img.fallback;
                else el.remove();
              }}
              className="flex-none w-[150px] h-[110px] object-cover rounded-lg bg-black/[.08]"
            />
          ))}
      </div>
      <a
        className="gallery-more focus-ring inline-block mt-2.5 text-[12.5px] font-bold pb-px"
        href={googleImagesUrl}
        target="_blank"
        rel="noopener"
      >
        See more on Google Images →
      </a>
    </div>
  );
}
