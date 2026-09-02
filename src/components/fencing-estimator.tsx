"use client";

import { useState } from "react";
import {
  calculateGst,
  ESTIMATOR_INPUT_CLASSNAME,
  formatCurrency,
  parsePositiveNumber,
} from "@/lib/estimate";
import EstimateResult from "./estimate-result";

const HEIGHT_RATES = {
  "1.2": 140,
  "1.5": 180,
  "1.8": 240,
} as const;

type HeightTier = keyof typeof HEIGHT_RATES;

export default function FencingEstimator() {
  const [length, setLength] = useState("");
  const [heightTier, setHeightTier] = useState<HeightTier>("1.2");

  const parsedLength = parsePositiveNumber(length);
  const rate = HEIGHT_RATES[heightTier];
  const result = parsedLength ? calculateGst(parsedLength * rate) : null;

  return (
    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Fence length (linear m)</span>
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
          <span>Fence height</span>
          <select
            value={heightTier}
            onChange={(event) =>
              setHeightTier(event.target.value as HeightTier)
            }
            className={ESTIMATOR_INPUT_CLASSNAME}
          >
            {(Object.keys(HEIGHT_RATES) as HeightTier[]).map((tier) => (
              <option key={tier} value={tier}>
                {tier}m — {formatCurrency(HEIGHT_RATES[tier])}/m
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm text-slate-500">
        Rate: {formatCurrency(rate)} per linear metre + GST, at {heightTier}m
        height.
      </p>

      {result ? (
        <EstimateResult {...result} />
      ) : (
        <p className="text-sm text-slate-400">
          Enter your fence length to see your estimate.
        </p>
      )}

      <p className="text-xs text-slate-400">
        This is a rough estimate only and may vary based on site conditions.
        Contact us for an accurate quote.
      </p>
    </div>
  );
}
