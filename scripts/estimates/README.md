# Rough estimate PDFs

Separate from the [client quote generator](../quotes/README.md). Use this for a quick pre-site-visit
"Estimate" PDF — job details and a calculated price range, no payment schedule, clearly not a quote.

Currently supports retaining walls only (length, height -> calculated area and price range, using the
same per-sqm rates as the website's retaining wall calculator, from `src/lib/estimate.ts`).

To generate one:

1. Copy `data/example.ts` to `data/<new-id>.ts` and edit the client, job location, wall length, and
   wall height.
2. Run:

   ```
   npm run estimate -- <new-id>
   ```

3. The PDF is written to `~/Desktop/Estimates/<new-id>.pdf` (not in the repo).

The generator refuses to build a PDF for walls over 1.5m, since those need council consent and an
engineer's report rather than a flat per-sqm rate.

Shared layout lives in `template.tsx` and business contact details come from `../quotes/business.ts`
(not committed — see its own folder for why).
