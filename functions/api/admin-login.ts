import type { Env } from "../types";
import { badRequest, json, unauthorized } from "./_lib";

const SESSION_HOURS = 12;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.json().catch(() => null);
  const password = (body as { password?: unknown } | null)?.password;
  if (typeof password !== "string" || !password) return badRequest("Missing password.");

  if (password !== env.ADMIN_PASSWORD) {
    return unauthorized("Incorrect password.");
  }

  const token = crypto.randomUUID() + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_HOURS * 60 * 60 * 1000).toISOString();
  await env.DB.prepare("INSERT INTO admin_sessions (token, expires_at) VALUES (?, ?)")
    .bind(token, expiresAt)
    .run();

  return json({ ok: true, token, expiresAt });
};
