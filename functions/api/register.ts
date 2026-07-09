import type { Env } from "../types";
import { badRequest, json, normalizeUsername } from "./_lib";

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.json().catch(() => null);
  const username = normalizeUsername((body as { username?: unknown } | null)?.username);
  if (!username) {
    return badRequest("Enter a username using 1-32 letters, numbers, spaces, - or _.");
  }

  await env.DB.prepare("INSERT OR IGNORE INTO users (username) VALUES (?)").bind(username).run();
  const row = await env.DB.prepare("SELECT username FROM users WHERE username = ?")
    .bind(username)
    .first<{ username: string }>();

  return json({ ok: true, username: row?.username ?? username });
};
