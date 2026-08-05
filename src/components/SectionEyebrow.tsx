interface SectionEyebrowProps {
  index: string;
  label: string;
}

export default function SectionEyebrow({ index, label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="node-dot shrink-0" />
      <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-text-muted">
        {index} · {label}
      </span>
      <span className="flex-1 trace-line" />
    </div>
  );
}
