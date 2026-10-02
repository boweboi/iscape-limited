import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // scripts/ holds standalone CLI tools (run via tsx, not part of the
    // site) that import a gitignored local-only file — keep them out of
    // the site's typecheck entirely rather than typechecking them here.
    tsconfigPath: "tsconfig.build.json",
  },
};

export default nextConfig;
