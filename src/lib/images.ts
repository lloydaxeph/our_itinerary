import type { ImageResult } from "../types";

/**
 * Optional Google Custom Search source. Both are blank by default (free tier: no key needed,
 * falls back to Wikimedia Commons). To enable Google's actual top image results:
 *   1. Create a free API key: https://developers.google.com/custom-search/v1/overview
 *   2. Create a Programmable Search Engine (enable "Image search" + "Search the entire web")
 *      at https://programmablesearchengine.google.com and copy its "Search engine ID".
 *   3. Paste both below. Free tier = 100 searches/day; don't ship a public build with a key
 *      inside client code — proxy it through a server if you deploy this publicly.
 */
export const GOOGLE_API_KEY = "";
export const GOOGLE_CX = "";
export const IMG_COUNT = 5;

export async function googleImages(query: string): Promise<ImageResult[]> {
  const url =
    "https://www.googleapis.com/customsearch/v1" +
    "?key=" + encodeURIComponent(GOOGLE_API_KEY) +
    "&cx=" + encodeURIComponent(GOOGLE_CX) +
    "&searchType=image&num=" + IMG_COUNT +
    "&q=" + encodeURIComponent(query);
  const r = await fetch(url);
  if (!r.ok) return []; // quota exceeded / bad key -> fall back to Wikimedia
  const j = await r.json();
  return (j.items ?? []).map((it: { link: string; image?: { thumbnailLink?: string } }) => ({
    src: it.link,
    fallback: it.image?.thumbnailLink,
  }));
}

interface CommonsPage {
  index?: number;
  imageinfo?: { url: string; thumburl?: string; mime: string }[];
}

export async function commonsSearch(query: string): Promise<ImageResult[]> {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
    "&generator=search&gsrnamespace=6&gsrlimit=12" +
    "&gsrsearch=" + encodeURIComponent(query) +
    "&prop=imageinfo&iiprop=url%7Cmime&iiurlwidth=480";
  const r = await fetch(url);
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  const pages: CommonsPage[] = j.query?.pages ? Object.values(j.query.pages) : [];
  return pages
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0)) // keep relevance order
    .map((p) => p.imageinfo?.[0])
    .filter((i): i is NonNullable<typeof i> => !!i && /^image\/(jpeg|png|webp|gif)/.test(i.mime))
    .map((i) => ({ src: i.thumburl || i.url }))
    .slice(0, IMG_COUNT);
}

export async function loadActivityImages(name: string, city: string): Promise<ImageResult[]> {
  const query = `${name} ${city} Vietnam`;
  if (GOOGLE_API_KEY && GOOGLE_CX) {
    const imgs = await googleImages(query);
    if (imgs.length > 0) return imgs;
  }
  let imgs = await commonsSearch(`${name} ${city}`);
  if (imgs.length === 0) imgs = await commonsSearch(`${name} Vietnam`);
  return imgs;
}
