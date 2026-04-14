import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a minimal self-contained server bundle at `.next/standalone`
  // so the Docker runner stage can ship a small image without node_modules.
  output: "standalone",
  // Tell Next where the monorepo root is so it traces workspace deps
  // (@workspace/ui) when producing the standalone bundle.
  outputFileTracingRoot: path.join(__dirname, "../../"),
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
