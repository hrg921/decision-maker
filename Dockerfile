FROM node:12 as builder

WORKDIR /usr/app

# For package-lock.json
COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY tsconfig.json ./

FROM builder as production
COPY src ./src

RUN npx tsc; exit 0

EXPOSE 3000
CMD ["node", "./build/koa/server.js"]