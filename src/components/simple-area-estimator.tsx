"use client";

import { useState } from "react";
import {
  calculateGst,
  ESTIMATOR_INPUT_CLASSNAME,
  formatCurrency,
  parsePositiveNumber,
} from "@/lib/estimate";
import EstimateResult from "./estimate-result";

export default function SimpleAreaEstimator({
  rate,
  fieldLabel,
}: {
  rate: number;
  fieldLabel: string;
}) {
  const [area, setArea] = useState("");
  const parsedArea = parsePositiveNumber(area);
  const result = parsedArea ? calculateGst(parsedArea * rate) : null;

  return (
    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <label className="block space-y-2 text-sm text-slate-700">
        <span>{fieldLabel} (m²)</span>
        <input
          type="number"
          min="0"
          step="0.1"
          value={area}
          onChange={(event) => setArea(event.target.value)}
          placeholder="0"
          className={ESTIMATOR_INPUT_CLASSNAME}
        />
      </label>

      <p className="text-sm text-slate-500">
        Rate: {formatCurrency(rate)} per m² + GST
      </p>

      {result ? (
        <EstimateResult {...result} />
      ) : (
        <p className="text-sm text-slate-400">
          Enter a measurement to see your estimate.
        </p>
      )}

      <p className="text-xs text-slate-400">
        This is a rough estimate only and may vary based on site conditions.
        Contact us for an accurate quote.
      </p>
    </div>
  );
}
