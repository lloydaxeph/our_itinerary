export type City = "Hanoi" | "Sapa";

export interface Activity {
  n: string; // name
  d: string; // description
}

export interface TimeBlock {
  time: string;
  label: string;
  transit?: string;
  items: Activity[];
}

export interface Day {
  date: string;
  nice: string;
  city: City;
  route: [string, string];
  note: string;
  blocks: TimeBlock[];
}

export interface ImageResult {
  src: string;
  fallback?: string;
}

/** `${dayIndex}-${blockIndex}-${itemIndex}` */
export type ActivityId = string;

export interface SelectedRow {
  date: string;
  day: string;
  city: City;
  time: string;
  name: string;
  desc: string;
}
