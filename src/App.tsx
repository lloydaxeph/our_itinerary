import { useCallback, useState } from "react";
import { Book } from "./components/Book";
import { Pager } from "./components/Pager";
import { Toast } from "./components/Toast";
import { TopBar } from "./components/TopBar";
import { DAYS } from "./data/days";
import { useSelection } from "./hooks/useSelection";
import { useToast } from "./hooks/useToast";
import { downloadCsv } from "./lib/csv";
import type { SelectedRow } from "./types";

// Flat, itinerary-ordered lookup so export doesn't depend on DOM order.
const ROWS_BY_ID = new Map<string, SelectedRow>();
DAYS.forEach((day, di) => {
  day.blocks.forEach((block, bi) => {
    block.items.forEach((item, ii) => {
      ROWS_BY_ID.set(`${di}-${bi}-${ii}`, {
        date: day.date,
        day: `Day ${di + 1}`,
        city: day.city,
        time: block.time,
        name: item.n,
        desc: item.d,
      });
    });
  });
});
const ORDERED_IDS = [...ROWS_BY_ID.keys()];

export default function App() {
  const { selected, toggle, isSelected, count } = useSelection();
  const { message, show } = useToast();
  const [current, setCurrent] = useState(0);

  const handleExport = useCallback(() => {
    if (selected.size === 0) {
      show("No places selected yet — tap a checkbox to add it to your plan.");
      return;
    }
    const rows = ORDERED_IDS.filter((id) => selected.has(id)).map((id) => ROWS_BY_ID.get(id)!);
    downloadCsv(rows, "hanoi-sapa-itinerary.csv");
    show(`Exported ${selected.size} selected place${selected.size > 1 ? "s" : ""} ✓`);
  }, [selected, show]);

  return (
    <>
      <TopBar count={count} onExport={handleExport} />
      <Book days={DAYS} isSelected={isSelected} onToggle={toggle} onPageChange={setCurrent} />
      <Pager days={DAYS} current={current} />
      <Toast message={message} />
    </>
  );
}
