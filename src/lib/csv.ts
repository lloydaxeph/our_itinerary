import type { SelectedRow } from "../types";

const HEADER = ["Date", "Day", "City", "Time Block", "Place/Activity", "Description"];

function csvField(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export function rowsToCsv(rows: SelectedRow[]): string {
  const lines = [
    HEADER,
    ...rows.map((r) => [r.date, r.day, r.city, r.time, r.name, r.desc]),
  ];
  return lines.map((line) => line.map(csvField).join(",")).join("\r\n");
}

export function downloadCsv(rows: SelectedRow[], filename: string): void {
  const csv = rowsToCsv(rows);
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
