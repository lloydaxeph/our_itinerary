import type { Env } from "../../../types";
import { badRequest, json } from "../../_lib";

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const voteId = Number(params.id);
  if (!Number.isInteger(voteId)) return badRequest("Invalid vote id.");

  const body = await request.json().catch(() => null);
  const parsed = body as { user?: unknown; item_id?: unknown; item_name?: unknown } | null;
  const user = typeof parsed?.user === "string" ? parsed.user.trim() : "";
  const itemId = typeof parsed?.item_id === "string" ? parsed.item_id.trim() : "";
  const itemName = typeof parsed?.item_name === "string" ? parsed.item_name.trim() : "";
  if (!user || !itemId || !itemName) return badRequest("user, item_id and item_name are required.");

  await env.DB.prepare(
    "UPDATE votes SET user = ?, item_id = ?, item_name = ? WHERE vote_id = ?",
  )
    .bind(user, itemId, itemName, voteId)
    .run();

  return json({ ok: true });
};

export const onRequestDelete: PagesFunction<Env> = async ({ env, params }) => {
  const voteId = Number(params.id);
  if (!Number.isInteger(voteId)) return badRequest("Invalid vote id.");

  await env.DB.prepare("DELETE FROM votes WHERE vote_id = ?").bind(voteId).run();

  return json({ ok: true });
};
