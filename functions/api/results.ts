import type { Env } from "../types";
import { json } from "./_lib";

interface ResultRow {
  item_id: string;
  item_name: string;
  votes: number;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB.prepare(
    `SELECT item_id, item_name, COUNT(DISTINCT user) as votes
     FROM votes
     GROUP BY item_id, item_name
     ORDER BY votes DESC, item_name ASC`,
  ).all<ResultRow>();

  return json({ items: results ?? [] });
};
