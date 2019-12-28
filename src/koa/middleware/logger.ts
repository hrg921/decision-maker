import { Context, Next } from 'koa';

export const logger = async (ctx: Context, next: Next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
};
