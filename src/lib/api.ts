import type { AdminVoteRow, ResultRow, VoteItem } from "../types";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: { "content-type": "application/json", ...init?.headers },
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message = (data as { error?: string } | null)?.error ?? `Request failed (${res.status})`;
    throw new Error(message);
  }
  return data as T;
}

export function register(username: string): Promise<{ ok: true; username: string }> {
  return request("/api/register", { method: "POST", body: JSON.stringify({ username }) });
}

export function fetchMyVotes(username: string): Promise<{ items: VoteItem[] }> {
  return request(`/api/votes?username=${encodeURIComponent(username)}`);
}

export function submitVotes(
  username: string,
  items: VoteItem[],
): Promise<{ ok: true; count: number }> {
  return request("/api/votes", { method: "POST", body: JSON.stringify({ username, items }) });
}

export function fetchResults(): Promise<{ items: ResultRow[] }> {
  return request("/api/results");
}

export function adminLogin(password: string): Promise<{ ok: true; token: string }> {
  return request("/api/admin-login", { method: "POST", body: JSON.stringify({ password }) });
}

export function fetchAdminVotes(token: string): Promise<{ items: AdminVoteRow[] }> {
  return request("/api/admin/votes", { headers: { authorization: `Bearer ${token}` } });
}

export function updateAdminVote(
  token: string,
  voteId: number,
  patch: { user: string; item_id: string; item_name: string },
): Promise<{ ok: true }> {
  return request(`/api/admin/votes/${voteId}`, {
    method: "PUT",
    headers: { authorization: `Bearer ${token}` },
    body: JSON.stringify(patch),
  });
}

export function deleteAdminVote(token: string, voteId: number): Promise<{ ok: true }> {
  return request(`/api/admin/votes/${voteId}`, {
    method: "DELETE",
    headers: { authorization: `Bearer ${token}` },
  });
}
