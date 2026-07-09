import { useCallback, useState } from "react";
import type { ActivityId } from "../types";

export function useSelection() {
  const [selected, setSelected] = useState<Set<ActivityId>>(new Set());

  const toggle = useCallback((id: ActivityId, on: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const isSelected = useCallback((id: ActivityId) => selected.has(id), [selected]);

  const setAll = useCallback((ids: ActivityId[]) => {
    setSelected(new Set(ids));
  }, []);

  return { selected, toggle, isSelected, count: selected.size, setAll };
}
