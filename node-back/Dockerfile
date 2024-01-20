FROM node:20-alpine as base

WORKDIR /home/node/app

COPY node-back/package*.json ./
COPY node-back/.env ./

RUN npm i

COPY node-back/ .

FROM base as production

RUN npm start