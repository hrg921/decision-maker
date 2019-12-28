import Router from 'koa-router';
import Container from 'typedi';
import { DecisionController } from '~koa/controllers/decision';

export const router = new Router();

const decisionController = Container.get(DecisionController);

router.get("/:id", ctx => {
  ctx.body = {
    decision: {
      id: +ctx.params.id
    }
  };
});

router.post("/", async ctx => {
  const { id, title } = await decisionController.addDecision(ctx.body.title);
  ctx.body = {
    decision: {
      id,
      title
    }
  };
});
