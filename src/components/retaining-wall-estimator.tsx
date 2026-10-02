"use client";

import { useState } from "react";
import {
  calculateRange,
  parsePositiveNumber,
  RETAINING_WALL_HIGH_RATE_PER_SQM as HIGH_RATE_PER_SQM,
  RETAINING_WALL_LOW_RATE_PER_SQM as LOW_RATE_PER_SQM,
  RETAINING_WALL_MAX_HEIGHT_METRES as MAX_HEIGHT_METRES,
} from "@/lib/estimate";
import EstimateRangeResult from "./estimate-range-result";
import MeasurementSlider from "./measurement-slider";

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
        This is an estimate only, for new work and does not include removal
        of any existing structures or materials. Final pricing may vary once
        we&apos;ve verified the dimensions and assessed ground conditions,
        and assumes normal machine access to the site — if access is
        restricted, additional costs may apply. A mobilisation fee and
        disposal costs are not included and will be added separately.
      </p>
    </div>
  );
}
