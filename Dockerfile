# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# 先复制依赖清单与构建脚本白名单，保留缓存层
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install deps
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Add build timestamp to break cache for data generation
ARG BUILD_DATE
ENV BUILD_DATE=${BUILD_DATE}

# Generate data and build static site (read optional token via BuildKit secret)
RUN --mount=type=secret,id=GH_TOKEN \
    sh -c 'TOKEN=""; \
      if [ -f /run/secrets/GH_TOKEN ]; then TOKEN=$(cat /run/secrets/GH_TOKEN); fi; \
      echo "Build date: $BUILD_DATE"; \
      node generateData.js "$TOKEN" && pnpm run build'

# Runtime stage
FROM nginx:1.27-alpine

# Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Use default nginx start command
CMD ["nginx", "-g", "daemon off;"]
