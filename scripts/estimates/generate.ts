import fs from "node:fs";
import path from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import { resolveEstimateOutputDir } from "../pdf-output-dir";
import { RetainingWallEstimateDocument } from "./template";
import { RETAINING_WALL_MAX_HEIGHT_METRES } from "../../src/lib/estimate";
import type { RetainingWallEstimateData } from "./types";

async function main() {
  const id = process.argv[2];

  if (!id) {
    console.error(
      "Usage: npm run estimate -- <estimate-id>\n" +
        "  <estimate-id> is the filename (without .ts) of an estimate in scripts/estimates/data/",
    );
    process.exit(1);
  }

  let data: RetainingWallEstimateData;
  try {
    const module = await import(`./data/${id}.ts`);
    data = module.default;
  } catch {
    console.error(`Could not find an estimate data file at scripts/estimates/data/${id}.ts`);
    process.exit(1);
  }

  if (data.wallHeight > RETAINING_WALL_MAX_HEIGHT_METRES) {
    console.error(
      `Wall height ${data.wallHeight}m exceeds ${RETAINING_WALL_MAX_HEIGHT_METRES}m. ` +
        "Walls over that height need council consent and an engineer's report — there's no flat per-sqm rate for this tier, so this tool can't estimate it.",
    );
    process.exit(1);
  }

  const outDir = resolveEstimateOutputDir();
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${id}.pdf`);

  await renderToFile(RetainingWallEstimateDocument({ data }), outPath);
  console.log(`Estimate PDF written to ${outPath}`);
}

main();
