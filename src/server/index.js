const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new Koa();


const httpServer = require('http-server');
const path = require('path');
const mockServer = httpServer.createServer({
  root: path.resolve(__dirname, './html')
});
mockServer.listen(8081);

require('./setup').setupGlobal();
require('./setup').loadAlltest();

const mockServerURL = 'http://127.0.0.1:8081/'
const saveFilePath = global.resultFolder;
const ptrr = require('./frame/puppeteer');

ptrr.runTest(mockServerURL, saveFilePath, global.testFileList[0].fileContent);

app.use(bodyParser());

const Router = require('./router');
app.use(Router.routes())
  .use(Router.allowedMethods());

//start listen to port
const port = 3001;
if (!module.parent) {
  try {
    app.listen(port);
    console.log(`Framewatcher listening on port ${port}...`);
    console.log(`node version ${process.version}`)
  } catch (e) {
    console.error(`port ${port} is maybe used`);
  }
}