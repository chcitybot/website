FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=768"
RUN npm run generate

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
