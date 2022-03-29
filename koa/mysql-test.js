const mysql = require("mysql");
const Koa = require('koa2');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mysql",
  database: "runoob",
});

connection.connect();

respData("select * from draft", '/getList', router)

function respData(sql, path, router) {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      router.get(path, async ( ctx ) => {
        ctx.response.type = 'text/html';
        ctx.status = 404;
        ctx.message = err
      })
      return;
    }
    router.get(path, async ( ctx ) => {
      ctx.response.type = 'text/html';
      ctx.status = 200;
      ctx.body = { data: result }
      if (!result.length) {
        ctx.body = { data: 'null' }
      }
    })
  })
}


connection.end();

router.get('/', async ( ctx ) => {
  ctx.response.type = 'text/html';
  ctx.body = `<div>wiweiweiiwe</div>`
})


app.use(router.routes());

app.listen(3000, () => {
  console.log(`正在运行 3000 端口`);
})
