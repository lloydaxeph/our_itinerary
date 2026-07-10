export type City = "Hanoi" | "Sapa";

export interface Activity {
  n: string; // name
  d: string; // description
  im?: string[]; // image urls
  loc?: string; // Google Maps query or place link
  thumb?: string; // thumbnail image url
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

/** `${dayIndex}-${blockIndex}-${itemIndex}`, also used as the vote item_id */
export type ActivityId = string;

export interface VoteItem {
  item_id: string;
  item_name: string;
}

export interface ResultRow extends VoteItem {
  votes: number;
}

export interface AdminVoteRow extends VoteItem {
  vote_id: number;
  user: string;
  created_at: string;
}
