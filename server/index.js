const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const port = 8989;
const router = require("./router");

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});
