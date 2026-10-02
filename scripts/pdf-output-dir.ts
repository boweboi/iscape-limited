import os from "node:os";
import path from "node:path";

function desktopFolder(name: string): string {
  return path.join(os.homedir(), "Desktop", name);
}

// Shared save locations for generated quote and estimate PDFs.
export function resolveQuoteOutputDir(): string {
  return desktopFolder("Quotes");
}

export function resolveEstimateOutputDir(): string {
  return desktopFolder("Estimates");
}
