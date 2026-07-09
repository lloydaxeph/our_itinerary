import { useCallback, useEffect, useState } from "react";
import { adminLogin, deleteAdminVote, fetchAdminVotes, updateAdminVote } from "../lib/api";
import { clearAdminToken, getAdminToken, setAdminToken } from "../lib/session";
import type { AdminVoteRow } from "../types";

function LoginForm({ onLoggedIn }: { onLoggedIn: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await adminLogin(password);
      setAdminToken(res.token);
      onLoggedIn(res.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-dvh bg-paper flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[320px] rounded-card bg-white border border-line shadow-card p-6 flex flex-col gap-4"
      >
        <h1 className="text-xl font-bold font-serif">Admin login</h1>
        <input
          autoFocus
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="focus-ring min-h-11 px-3.5 rounded-xl border border-line bg-paper text-[15px]"
          aria-label="Admin password"
        />
        {error && <p className="text-[13px] text-han-deep">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="focus-ring min-h-11 rounded-full bg-ink text-paper text-sm font-semibold tracking-wide shadow-card active:scale-[.97] disabled:opacity-60"
        >
          {busy ? "Checking…" : "Log in"}
        </button>
      </form>
    </div>
  );
}

function VotesTable({ token, onUnauthorized }: { token: string; onUnauthorized: () => void }) {
  const [rows, setRows] = useState<AdminVoteRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<number | null>(null);

  const load = useCallback(() => {
    fetchAdminVotes(token)
      .then((res) => setRows(res.items))
      .catch((err) => {
        if (err instanceof Error && err.message.toLowerCase().includes("unauthorized")) {
          onUnauthorized();
          return;
        }
        setError(err instanceof Error ? err.message : "Failed to load votes.");
      });
  }, [token, onUnauthorized]);

  useEffect(() => {
    load();
  }, [load]);

  function patchRow(voteId: number, patch: Partial<AdminVoteRow>) {
    setRows((prev) => prev?.map((r) => (r.vote_id === voteId ? { ...r, ...patch } : r)) ?? prev);
  }

  async function handleSave(row: AdminVoteRow) {
    setSavingId(row.vote_id);
    try {
      await updateAdminVote(token, row.vote_id, {
        user: row.user,
        item_id: row.item_id,
        item_name: row.item_name,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save.");
    } finally {
      setSavingId(null);
    }
  }

  async function handleDelete(voteId: number) {
    if (!confirm("Delete this vote row? This cannot be undone.")) return;
    setSavingId(voteId);
    try {
      await deleteAdminVote(token, voteId);
      setRows((prev) => prev?.filter((r) => r.vote_id !== voteId) ?? prev);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete.");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <div className="min-h-dvh bg-paper text-ink px-4 py-8">
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-bold font-serif">Admin · Votes</h1>
          <button
            type="button"
            onClick={() => {
              clearAdminToken();
              onUnauthorized();
            }}
            className="focus-ring min-h-9 px-3 rounded-full border border-line text-xs font-semibold"
          >
            Log out
          </button>
        </div>

        {error && <p className="text-han-deep text-sm mb-3">{error}</p>}
        {!rows && !error && <p className="text-ink-soft text-sm">Loading…</p>}
        {rows && rows.length === 0 && <p className="text-ink-soft text-sm">No votes yet.</p>}

        {rows && rows.length > 0 && (
          <div className="rounded-card border border-line bg-white shadow-card overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead className="bg-ink text-paper text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-3 py-3 font-semibold">Vote ID</th>
                  <th className="px-3 py-3 font-semibold">User</th>
                  <th className="px-3 py-3 font-semibold">Item ID</th>
                  <th className="px-3 py-3 font-semibold">Item Name</th>
                  <th className="px-3 py-3 font-semibold">Submitted</th>
                  <th className="px-3 py-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.vote_id} className={i % 2 === 0 ? "bg-white" : "bg-paper"}>
                    <td className="px-3 py-2 text-[13px] border-t border-line text-ink-soft">
                      {row.vote_id}
                    </td>
                    <td className="px-3 py-2 border-t border-line">
                      <input
                        value={row.user}
                        onChange={(e) => patchRow(row.vote_id, { user: e.target.value })}
                        className="focus-ring w-28 min-h-8 px-2 rounded-lg border border-line bg-paper text-[13px]"
                      />
                    </td>
                    <td className="px-3 py-2 border-t border-line">
                      <input
                        value={row.item_id}
                        onChange={(e) => patchRow(row.vote_id, { item_id: e.target.value })}
                        className="focus-ring w-24 min-h-8 px-2 rounded-lg border border-line bg-paper text-[13px]"
                      />
                    </td>
                    <td className="px-3 py-2 border-t border-line">
                      <input
                        value={row.item_name}
                        onChange={(e) => patchRow(row.vote_id, { item_name: e.target.value })}
                        className="focus-ring w-48 min-h-8 px-2 rounded-lg border border-line bg-paper text-[13px]"
                      />
                    </td>
                    <td className="px-3 py-2 text-[12px] border-t border-line text-ink-soft whitespace-nowrap">
                      {row.created_at}
                    </td>
                    <td className="px-3 py-2 border-t border-line whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleSave(row)}
                        disabled={savingId === row.vote_id}
                        className="focus-ring min-h-8 px-3 mr-1.5 rounded-full bg-ink text-paper text-[12px] font-semibold disabled:opacity-60"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(row.vote_id)}
                        disabled={savingId === row.vote_id}
                        className="focus-ring min-h-8 px-3 rounded-full border border-line text-[12px] font-semibold disabled:opacity-60"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(() => getAdminToken());

  if (!token) {
    return <LoginForm onLoggedIn={setToken} />;
  }

  return <VotesTable token={token} onUnauthorized={() => setToken(null)} />;
}
