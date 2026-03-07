# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY src/ ./src/
COPY package.json ./

ARG APP_VERSION=0.0.0
ARG BUILD_DATE
ARG GIT_COMMIT
ENV APP_VERSION=$APP_VERSION

LABEL org.opencontainers.image.version=$APP_VERSION \
      org.opencontainers.image.created=$BUILD_DATE \
      org.opencontainers.image.revision=$GIT_COMMIT

EXPOSE 3000
USER node
CMD ["node", "src/index.js"]
