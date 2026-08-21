# Build context must be the repo root (pnpm-workspace.yaml + pnpm-lock.yaml live there),
# not this directory. In Coolify: Base Directory = /, Dockerfile Location = /apps/frontend-doctor/Dockerfile

FROM node:22-alpine AS builder
RUN corepack enable && corepack prepare pnpm@10 --activate
WORKDIR /repo

# pnpm-lock.yaml enumerates every workspace package, so a frozen-lockfile install
# needs all of them present -- copy the whole repo (see .dockerignore for exclusions).
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @fitness-tasty/frontend-doctor build

FROM nginx:alpine
COPY --from=builder /repo/apps/frontend-doctor/dist /usr/share/nginx/html
RUN printf 'server {\n\
    listen 80;\n\
    root /usr/share/nginx/html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80
