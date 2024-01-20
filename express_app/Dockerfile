FROM node:20-alpine as base

WORKDIR /home/node/front

COPY express_app/package*.json ./

# RUN npm i

COPY express_app/ .

FROM base as production

RUN npm start