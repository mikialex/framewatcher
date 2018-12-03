const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new Koa();

app.use(bodyParser());

//start listen to port
const port = 3001;
if (!module.parent) {
  try {
    app.listen(3333);
    console.log(`Framewatcher listening on port ${port}...`);
    console.log(`node version ${process.version}`)
  } catch (e) {
    console.error(`port ${port} is maybe used`);
  }
}