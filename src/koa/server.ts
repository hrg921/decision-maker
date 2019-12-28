import { app } from './app';

const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);

console.info(`Koa server is listening ${HOST}:${PORT}`);
