"use client";

import { useState } from "react";
import { calculateRange, parsePositiveNumber } from "@/lib/estimate";
import EstimateRangeResult from "./estimate-range-result";
import MeasurementSlider from "./measurement-slider";

const LOW_RATE_PER_SQM = 612;
const HIGH_RATE_PER_SQM = 738;
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
      ? calculateRange(
          parsedLength * parsedHeight * LOW_RATE_PER_SQM,
          parsedLength * parsedHeight * HIGH_RATE_PER_SQM,
        )
      : null;

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <MeasurementSlider
        label="Wall length"
        unit="m"
        value={length}
        onChange={setLength}
        max={60}
        step={1}
      />
      <MeasurementSlider
        label="Wall height"
        unit="m"
        value={height}
        onChange={setHeight}
        max={2}
        step={0.1}
      />

      {overHeight ? (
        <div className="rounded-3xl bg-amber-50 p-6 text-sm leading-6 text-amber-800">
          Walls over {MAX_HEIGHT_METRES}m require council consent, and pricing
          depends on an engineer&apos;s report — there&apos;s no flat rate for
          this tier. Contact us for a tailored quote.
        </div>
      ) : result ? (
        <EstimateRangeResult {...result} />
      ) : (
        <p className="text-sm text-slate-400">
          Set your wall length and height to see your estimate.
        </p>
      )}

      <p className="text-xs text-slate-400">
        This is a rough estimate only and may vary based on site conditions.
        Contact us for an accurate quote.
      </p>
    </div>
  );
}
