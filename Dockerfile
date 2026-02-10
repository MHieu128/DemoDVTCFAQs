# Use Node.js 18 Alpine as base image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install packages based on the preferred package manager
COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* bun.lock* ./
RUN \
    if [ -f "package-lock.json" ]; then npm ci; \
    elif [ -f "yarn.lock" ]; then yarn install --frozen-lockfile; \
    elif [ -f "pnpm-lock.yaml" ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    elif [ -f "bun.lock" ]; then npm i -g bun && bun install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run the application
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the standalone server
COPY --from=builder /app/.next/standalone ./
# Copy the static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]