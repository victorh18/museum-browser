### STAGE 1: Build ###
FROM node:lts-slim AS build
WORKDIR /usr/src/app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.22.0-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/museum-library /usr/share/nginx/html
