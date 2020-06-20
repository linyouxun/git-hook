var Router = require("koa-router");
var router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "Hello world";
});

router.post("/git/config", async (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = ctx.request.body;
});

module.exports = router;
