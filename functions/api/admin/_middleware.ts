import type { Env } from "../../types";
import { unauthorized } from "../_lib";

export const onRequest: PagesFunction<Env> = async ({ request, env, next }) => {
  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return unauthorized();

  const session = await env.DB.prepare(
    "SELECT token FROM admin_sessions WHERE token = ? AND expires_at > datetime('now')",
  )
    .bind(token)
    .first<{ token: string }>();
  if (!session) return unauthorized("Session expired — please log in again.");

  return next();
};
