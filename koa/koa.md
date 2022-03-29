### 中间件

### cookie 处理 keys
app.keys = ['im a newer secret', 'i like turtle'];

### app.context
app.context.db = db();
app.use(async ctx => {
  console.log(ctx.db);
});
app.use(async ctx => {
  ctx; // 这是 Context
  ctx.request; // 这是 koa Request
  ctx.response; // 这是 koa Response
});

### 错误处理
app.on('error', err => {
  log.error('server error', err)
});
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

### 推荐的命名空间，用于通过中间件传递信息和你的前端视图。
ctx.state.user = await User.find(id);
