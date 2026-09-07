import { formatCurrency } from "@/lib/estimate";

type Breakdown = { subtotal: number; gst: number; total: number };

export default function EstimateRangeResult({
  low,
  high,
}: {
  low: Breakdown;
  high: Breakdown;
}) {
  return (
    <div className="space-y-2 rounded-3xl bg-slate-50 p-6">
      <div className="flex flex-wrap justify-between gap-x-4 text-sm text-slate-700">
        <span>Subtotal (excl. GST)</span>
        <span>
          {formatCurrency(low.subtotal)} – {formatCurrency(high.subtotal)}
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-x-4 text-sm text-slate-700">
        <span>GST (15%)</span>
        <span>
          {formatCurrency(low.gst)} – {formatCurrency(high.gst)}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap justify-between gap-x-4 border-t border-slate-200 pt-2 text-base font-semibold text-slate-950">
        <span>Estimated total (incl. GST)</span>
        <span>
          {formatCurrency(low.total)} – {formatCurrency(high.total)}
        </span>
      </div>
    </div>
  );
}
