# syntax=docker/dockerfile:experimental

# Build stage
FROM node:12.13.0 as build-stage

WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

COPY . .

RUN npm run build

# Run stage
FROM nginx:1.16

COPY --from=build-stage /app/dist/terkep-test /usr/share/nginx/html
