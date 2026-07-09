import type { Env } from "../types";
import { badRequest, json, normalizeUsername } from "./_lib";

interface VoteItem {
  item_id: string;
  item_name: string;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const username = normalizeUsername(url.searchParams.get("username"));
  if (!username) return badRequest("Missing or invalid username.");

  const { results } = await env.DB.prepare(
    "SELECT item_id, item_name FROM votes WHERE user = ? COLLATE NOCASE",
  )
    .bind(username)
    .all<VoteItem>();

  return json({ items: results ?? [] });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.json().catch(() => null);
  const parsed = body as { username?: unknown; items?: unknown } | null;
  const username = normalizeUsername(parsed?.username);
  if (!username) return badRequest("Missing or invalid username.");

  const items = parsed?.items;
  if (!Array.isArray(items)) return badRequest("items must be an array.");
  const clean: VoteItem[] = [];
  for (const item of items) {
    if (
      item &&
      typeof item === "object" &&
      typeof (item as VoteItem).item_id === "string" &&
      typeof (item as VoteItem).item_name === "string"
    ) {
      clean.push({ item_id: (item as VoteItem).item_id, item_name: (item as VoteItem).item_name });
    }
  }

  const user = await env.DB.prepare("SELECT username FROM users WHERE username = ? COLLATE NOCASE")
    .bind(username)
    .first<{ username: string }>();
  if (!user) return badRequest("Unknown user — please register first.");

  const statements = [
    env.DB.prepare("DELETE FROM votes WHERE user = ? COLLATE NOCASE").bind(user.username),
    ...clean.map((item) =>
      env.DB.prepare("INSERT INTO votes (user, item_id, item_name) VALUES (?, ?, ?)").bind(
        user.username,
        item.item_id,
        item.item_name,
      ),
    ),
  ];
  await env.DB.batch(statements);

  return json({ ok: true, count: clean.length });
};
