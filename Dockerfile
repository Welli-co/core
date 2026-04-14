# syntax=docker/dockerfile:1.7
# Multi-stage Dockerfile for Next.js admin app in a pnpm + Turborepo monorepo.
# Produces a slim runner image using Next.js `output: "standalone"`.

ARG NODE_VERSION=22-alpine

# ─── base ─────────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS base
RUN corepack enable
WORKDIR /app

# ─── deps ─────────────────────────────────────────────────────────────────────
# Install workspace dependencies only. Copying just the manifests first lets
# Docker cache this layer across source-only changes.
FROM base AS deps
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json .npmrc* ./
COPY apps/admin/package.json ./apps/admin/
COPY apps/storybook/package.json ./apps/storybook/
COPY packages/ui/package.json ./packages/ui/
COPY packages/eslint-config/package.json ./packages/eslint-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ─── builder ──────────────────────────────────────────────────────────────────
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps ./apps
COPY --from=deps /app/packages ./packages
COPY . .
RUN pnpm turbo build --filter=admin

# ─── runner ───────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# `.next/standalone` contains the minimal server + only the traced deps.
# Tracing root must point at the monorepo root (set in next.config.mjs) so
# workspace packages like @workspace/ui are included.
COPY --from=builder --chown=nextjs:nodejs /app/apps/admin/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
# No /apps/admin/public dir currently — favicon lives in app/favicon.ico.
# Re-add a COPY line here if static assets are introduced.

USER nextjs
EXPOSE 8080

CMD ["node", "apps/admin/server.js"]
