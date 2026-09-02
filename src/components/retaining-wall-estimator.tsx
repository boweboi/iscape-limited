"use client";

import { useState } from "react";
import {
  calculateGst,
  ESTIMATOR_INPUT_CLASSNAME,
  formatCurrency,
  parsePositiveNumber,
} from "@/lib/estimate";
import EstimateResult from "./estimate-result";

const RATE_PER_SQM = 738;
const MAX_HEIGHT_METRES = 1.5;

export default function RetainingWallEstimator() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");

  const parsedLength = parsePositiveNumber(length);
  const parsedHeight = parsePositiveNumber(height);
  const hasInputs = parsedLength !== null && parsedHeight !== null;
  const overHeight = hasInputs && parsedHeight > MAX_HEIGHT_METRES;
  const result =
    hasInputs && !overHeight
      ? calculateGst(parsedLength * parsedHeight * RATE_PER_SQM)
      : null;

  return (
    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Wall length (m)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={length}
            onChange={(event) => setLength(event.target.value)}
            placeholder="0"
            className={ESTIMATOR_INPUT_CLASSNAME}
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span>Wall height (m)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="0"
            className={ESTIMATOR_INPUT_CLASSNAME}
          />
        </label>
      </div>

      <p className="text-sm text-slate-500">
        Rate: {formatCurrency(RATE_PER_SQM)} per m² + GST, for walls up to
        {" "}
        {MAX_HEIGHT_METRES}m high.
      </p>

      {overHeight ? (
        <div className="rounded-3xl bg-amber-50 p-6 text-sm leading-6 text-amber-800">
          Walls over {MAX_HEIGHT_METRES}m require council consent, and
          pricing depends on an engineer&apos;s report — there&apos;s no flat
          rate for this tier. Contact us for a tailored quote.
        </div>
      ) : result ? (
        <EstimateResult {...result} />
      ) : (
        <p className="text-sm text-slate-400">
          Enter your wall length and height to see your estimate.
        </p>
      )}

      <p className="text-xs text-slate-400">
        This is a rough estimate only and may vary based on site conditions.
        Contact us for an accurate quote.
      </p>
    </div>
  );
}
