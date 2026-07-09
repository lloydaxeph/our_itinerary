import { useEffect, useState } from "react";
import { Watermark } from "../components/Watermark";
import { fetchResults } from "../lib/api";
import type { ResultRow } from "../types";

export default function ResultsPage() {
  const [rows, setRows] = useState<ResultRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchResults()
      .then((res) => setRows(res.items))
      .catch((err) => setError(err instanceof Error ? err.message : "Failed to load results."));
  }, []);

  return (
    <div className="min-h-dvh bg-paper text-ink px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-[520px]">
        <div className="text-[11px] tracking-[.14em] uppercase text-ink-soft">
          Vietnam · Nov 4–10
        </div>
        <h1 className="text-2xl font-bold font-serif mb-5">Vote Results</h1>

        {error && <p className="text-han-deep text-sm">{error}</p>}
        {!error && !rows && <p className="text-ink-soft text-sm">Loading…</p>}
        {rows && rows.length === 0 && (
          <p className="text-ink-soft text-sm">No votes submitted yet.</p>
        )}

        {rows && rows.length > 0 && (
          <div className="rounded-card border border-line bg-white shadow-card overflow-hidden">
            <div className="max-h-[75vh] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-ink text-paper text-xs uppercase tracking-wide">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Item</th>
                    <th className="px-4 py-3 font-semibold text-right">Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.item_id}
                      className={i % 2 === 0 ? "bg-white" : "bg-paper"}
                    >
                      <td className="px-4 py-3 text-[14px] border-t border-line">{row.item_name}</td>
                      <td className="px-4 py-3 text-[14px] border-t border-line text-right font-semibold">
                        {row.votes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Watermark />
    </div>
  );
}
