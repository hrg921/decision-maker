import Router from 'koa-router';

import { router as decisionsRouter } from './decisions';

export const router = new Router();

router.use("/decisions", decisionsRouter.routes());
