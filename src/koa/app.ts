import Koa from 'koa';

import { logger } from './middleware';
import { router } from './router';

const app = new Koa();

app.use(logger);
app.use(router.routes());

export { app };
