"use client";

import { useState } from "react";
import { calculateRange, parsePositiveNumber } from "@/lib/estimate";
import EstimateRangeResult from "./estimate-range-result";
import MeasurementSlider from "./measurement-slider";

export default function SimpleAreaEstimator({
  lowRate,
  highRate,
  fieldLabel,
  sliderMax = 250,
  sliderStep = 1,
}: {
  lowRate: number;
  highRate: number;
  fieldLabel: string;
  sliderMax?: number;
  sliderStep?: number;
}) {
  const [area, setArea] = useState("");
  const parsedArea = parsePositiveNumber(area);
  const result = parsedArea
    ? calculateRange(parsedArea * lowRate, parsedArea * highRate)
    : null;

  return (
    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <MeasurementSlider
        label={fieldLabel}
        unit="m²"
        value={area}
        onChange={setArea}
        max={sliderMax}
        step={sliderStep}
      />

      {result ? (
        <EstimateRangeResult {...result} />
      ) : (
        <p className="text-sm text-slate-400">
          Set a measurement to see your estimate.
        </p>
      )}

      <p className="text-xs text-slate-400">
        This is a rough estimate only and may vary based on site conditions.
        Contact us for an accurate quote.
      </p>
    </div>
  );
}
