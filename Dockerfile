# syntax=docker/dockerfile:1.7
#
# W3A site — Next 15 static export served by ghcr.io/hanzoai/spa.
# Mirrors the pattern used in ~/work/lux/bridge/Dockerfile: the build
# stage runs pnpm in a node:22 base and produces ./out, then the runtime
# stage copies that into the canonical hanzoai/spa static image. No
# Node runtime in production — pure static.
FROM node:22-alpine AS build
RUN apk add --no-cache libc6-compat python3 make g++ git
RUN corepack enable
WORKDIR /app

# Copy package manifests first so the install layer caches independently
# of source changes.
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile || pnpm install

# Copy the rest of the source.
COPY . .

# The prebuild step copies the canonical PDF; the build itself runs
# `next build` which honours `output: 'export'` and writes to ./out.
RUN pnpm build

FROM ghcr.io/hanzoai/spa
COPY --from=build /app/out /public
