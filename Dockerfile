FROM oven/bun:1.1.38-alpine

WORKDIR /app
COPY . .

RUN bun i
RUN bun run build

CMD [ "bun", "run", "start" ]

# FROM oven/bun:1.1.38-alpine AS base

# FROM base AS deps
# WORKDIR /app

# COPY package.json bun.lockb ./
# RUN bun i

# FROM base AS builder
# WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules
# COPY src ./src
# COPY package.json ./
# COPY components.json ./
# COPY next.config.ts .
# COPY eslint.config.cjs ./
# COPY postcss.config.mjs ./
# COPY tailwind.config.ts ./
# COPY tsconfig.json ./

# RUN bun run build

# FROM base AS deps_prod
# WORKDIR /app

# COPY package.json bun.lockb ./
# RUN bun i --production

# FROM base AS runner
# WORKDIR /app

# COPY --from=builder /app/.next ./.next
# COPY --from=deps_prod /app/node_modules ./node_modules
# COPY public ./public
# COPY next.config.ts .
# COPY package.json ./

# ENV TZ=Asia/Tokyo
# CMD [ "bun", "run", "start" ]
