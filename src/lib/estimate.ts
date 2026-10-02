// NZ GST rate applied on top of every trade rate below.
export const GST_RATE = 0.15;

export function calculateGst(subtotal: number) {
  const gst = subtotal * GST_RATE;
  return { subtotal, gst, total: subtotal + gst };
}

// Builds a low-to-high estimate range from the two ex-GST subtotals.
export function calculateRange(subtotalLow: number, subtotalHigh: number) {
  return {
    low: calculateGst(subtotalLow),
    high: calculateGst(subtotalHigh),
  };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  }).format(value);
}

export const ESTIMATOR_INPUT_CLASSNAME =
  "w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100";

export function parsePositiveNumber(value: string): number | null {
  const parsed = parseFloat(value);
  return !Number.isNaN(parsed) && parsed > 0 ? parsed : null;
}

// Retaining wall rates, ex-GST, per square metre (length x height).
export const RETAINING_WALL_LOW_RATE_PER_SQM = 612;
export const RETAINING_WALL_HIGH_RATE_PER_SQM = 738;
// Walls taller than this require council consent and an engineer's report,
// so there's no flat per-sqm rate for that tier.
export const RETAINING_WALL_MAX_HEIGHT_METRES = 1.5;
