# Build Angular image

FROM node:lts-alpine3.17 as build

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run build --prod


# Build Server image

FROM nginx:1.23.3-alpine

COPY --from=build /app/www /usr/share/nginx/html

COPY ./src/nginx/default.conf /etc/nginx/conf.d/default.conf
