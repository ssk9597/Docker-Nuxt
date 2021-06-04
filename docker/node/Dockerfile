FROM node:14.15.3-alpine

WORKDIR /app

RUN apk update

COPY ./src/package*.json ./
RUN yarn install

ENV HOST 0.0.0.0
EXPOSE 4000

CMD yarn dev