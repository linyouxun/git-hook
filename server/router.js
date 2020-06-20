var Router = require("koa-router");
var router = new Router();

router.post("/git/config", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

module.exports = router;
