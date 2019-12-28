import Koa from 'koa';

const HOST = "0.0.0.0";
const PORT = 3000;

export const app = new Koa();

app.use(async (ctx: Koa.Context) => {
  ctx.body = "Hello World!";
});

app.listen(PORT, HOST);
console.log("hello");
