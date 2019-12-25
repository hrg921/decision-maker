FROM node:12

WORKDIR /usr/app

# For package-lock.json
COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000
CMD ["./node_modules/.bin/ts-node", "./src/server.koa.ts"]