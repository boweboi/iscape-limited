import { formatCurrency } from "@/lib/estimate";

export default function EstimateResult({
  subtotal,
  gst,
  total,
}: {
  subtotal: number;
  gst: number;
  total: number;
}) {
  return (
    <div className="space-y-2 rounded-3xl bg-slate-50 p-6">
      <div className="flex justify-between text-sm text-slate-700">
        <span>Subtotal (excl. GST)</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm text-slate-700">
        <span>GST (15%)</span>
        <span>{formatCurrency(gst)}</span>
      </div>
      <div className="mt-2 flex justify-between border-t border-slate-200 pt-2 text-base font-semibold text-slate-950">
        <span>Estimated total (incl. GST)</span>
        <span>{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
