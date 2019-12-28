import Router from 'koa-router';

export const router = new Router();

router.post("/", ctx => {
  ctx.body = {
    id: 1,
    decision: {
      title: ctx.request.body.title
    }
  };
});
