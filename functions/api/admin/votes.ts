import type { Env } from "../../types";
import { json } from "../_lib";

interface AdminVoteRow {
  vote_id: number;
  user: string;
  item_id: string;
  item_name: string;
  created_at: string;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB.prepare(
    "SELECT vote_id, user, item_id, item_name, created_at FROM votes ORDER BY vote_id DESC",
  ).all<AdminVoteRow>();

  return json({ items: results ?? [] });
};
