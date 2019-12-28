import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { logger } from './middleware';
import { router } from './router';

const app = new Koa();

app.use(bodyParser());
app.use(logger);
app.use(router.routes());

export { app };
