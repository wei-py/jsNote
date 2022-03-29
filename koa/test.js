const Koa = require('koa2');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('/', async ( ctx ) => {
  ctx.response.type = 'text/html';
  ctx.body = `<div>wiweiweiiwe</div>`
})
router.get('/getList', async ( ctx ) => {
  ctx.response.type = 'text/html';
  ctx.body = 'haha'
})

app.use(router.routes());

app.listen(3000, () => {
  console.log(`正在运行 3000 端口`);
})
