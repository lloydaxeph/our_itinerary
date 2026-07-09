import { useCallback, useEffect, useState } from "react";
import { Book } from "./components/Book";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { Pager } from "./components/Pager";
import { RegisterGate } from "./components/RegisterGate";
import { Toast } from "./components/Toast";
import { TopBar } from "./components/TopBar";
import { DAYS } from "./data/days";
import { useSelection } from "./hooks/useSelection";
import { useToast } from "./hooks/useToast";
import { fetchMyVotes, submitVotes } from "./lib/api";
import { getStoredUsername, setStoredUsername } from "./lib/session";
import type { VoteItem } from "./types";

// Flat, itinerary-ordered lookup of item_id -> item_name.
const ITEM_NAMES = new Map<string, string>();
DAYS.forEach((day, di) => {
  day.blocks.forEach((block, bi) => {
    block.items.forEach((item, ii) => {
      ITEM_NAMES.set(`${di}-${bi}-${ii}`, item.n);
    });
  });
});

export default function App() {
  const { selected, toggle, isSelected, count, setAll } = useSelection();
  const { message, show } = useToast();
  const [current, setCurrent] = useState(0);
  const [username, setUsername] = useState<string | null>(() => getStoredUsername());
  const [submitting, setSubmitting] = useState(false);
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [confirmingResubmit, setConfirmingResubmit] = useState(false);

  useEffect(() => {
    if (!username) return;
    fetchMyVotes(username)
      .then((res) => {
        if (res.items.length > 0) {
          setAll(res.items.map((i) => i.item_id));
          setHasSubmittedBefore(true);
        }
      })
      .catch(() => {
        /* ignore — user just starts with a blank slate */
      });
  }, [username, setAll]);

  const doSubmit = useCallback(async () => {
    if (!username) return;
    setSubmitting(true);
    try {
      const items: VoteItem[] = [...selected].map((id) => ({
        item_id: id,
        item_name: ITEM_NAMES.get(id) ?? id,
      }));
      const res = await submitVotes(username, items);
      setHasSubmittedBefore(true);
      show(`Submitted ${res.count} pick${res.count === 1 ? "" : "s"} ✓`);
    } catch (err) {
      show(err instanceof Error ? err.message : "Couldn't submit — try again.");
    } finally {
      setSubmitting(false);
    }
  }, [username, selected, show]);

  const handleSubmit = useCallback(() => {
    if (selected.size === 0) {
      show("No places selected yet — tap a checkbox to add it to your plan.");
      return;
    }
    if (hasSubmittedBefore) {
      setConfirmingResubmit(true);
      return;
    }
    doSubmit();
  }, [selected, hasSubmittedBefore, show, doSubmit]);

  if (!username) {
    return (
      <RegisterGate
        onRegistered={(name) => {
          setStoredUsername(name);
          setUsername(name);
        }}
      />
    );
  }

  return (
    <>
      <TopBar username={username} count={count} submitting={submitting} onSubmit={handleSubmit} />
      <Book days={DAYS} isSelected={isSelected} onToggle={toggle} onPageChange={setCurrent} />
      <Pager days={DAYS} current={current} />
      <Toast message={message} />
      {confirmingResubmit && (
        <ConfirmDialog
          title="Replace your previous vote?"
          message="You've already submitted picks. Submitting again will replace them with your current selection."
          confirmLabel="Replace"
          onCancel={() => setConfirmingResubmit(false)}
          onConfirm={() => {
            setConfirmingResubmit(false);
            doSubmit();
          }}
        />
      )}
    </>
  );
}
