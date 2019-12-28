import Router from 'koa-router';

export const router = new Router();

router.post("/", ctx => {
  ctx.body = {
    decision: ""
  };
});
