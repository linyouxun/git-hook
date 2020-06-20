var Router = require("koa-router");
var router = new Router();

router.post("/git/config", async (ctx, next) => {
  console.log(ctx.body);
  ctx.body = {};
});

module.exports = router;
