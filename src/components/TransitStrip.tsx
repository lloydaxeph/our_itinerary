interface TransitStripProps {
  text: string;
}

export function TransitStrip({ text }: TransitStripProps) {
  const spaceIdx = text.indexOf(" ");
  const icon = text.slice(0, spaceIdx);
  const rest = text.slice(spaceIdx + 1);
  return (
    <div className="transit flex gap-2.5 items-start rounded-card px-3.5 py-3 text-[13.5px] leading-relaxed mb-2.5">
      <span className="text-base leading-tight">{icon}</span>
      <span>{rest}</span>
    </div>
  );
}
