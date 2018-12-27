const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = module.exports = new Koa();

const Server = require('socket.io');
const io = new Server();
// io.attach(app, {
//   pingInterval: 10000,
//   pingTimeout: 5000,
//   cookie: false
// });

io.on('connection', function(socket){
  console.log('connect');
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  // });
});

io.listen(3002)

require('./setup').createMockServer();
require('./setup').setupGlobal();
require('./setup').loadAlltest();

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