FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_VERSION=0.0.0
ARG REACT_APP_ENV=production
ENV REACT_APP_VERSION=$REACT_APP_VERSION
ENV REACT_APP_ENV=$REACT_APP_ENV
RUN CI=false npm run build

FROM nginx:alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
