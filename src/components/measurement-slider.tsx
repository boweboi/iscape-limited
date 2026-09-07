"use client";

export default function MeasurementSlider({
  label,
  unit,
  value,
  onChange,
  max,
  step = 1,
}: {
  label: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
  max: number;
  step?: number;
}) {
  const numeric = Number.parseFloat(value);
  const sliderValue = Number.isFinite(numeric)
    ? Math.min(Math.max(numeric, 0), max)
    : 0;

  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between gap-4">
        <span className="text-sm text-slate-700">{label}</span>
        <span className="flex items-center gap-1.5 text-sm text-slate-700">
          <input
            type="number"
            inputMode="decimal"
            min={0}
            step={step}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="0"
            aria-label={`${label} in ${unit}`}
            className="w-24 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-right text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
          <span className="text-slate-500">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={sliderValue}
        onChange={(event) => onChange(event.target.value)}
        aria-label={`${label} slider`}
        className="w-full cursor-pointer accent-slate-900"
      />
    </div>
  );
}
