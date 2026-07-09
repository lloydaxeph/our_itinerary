export function json(data: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: { "content-type": "application/json; charset=utf-8", ...init?.headers },
  });
}

export function badRequest(message: string): Response {
  return json({ error: message }, { status: 400 });
}

export function unauthorized(message = "Unauthorized"): Response {
  return json({ error: message }, { status: 401 });
}

const USERNAME_RE = /^[A-Za-z0-9 _-]{1,32}$/;

export function normalizeUsername(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim();
  if (!USERNAME_RE.test(trimmed)) return null;
  return trimmed;
}
