const Router = require('koa-router');
const FrameWatcher = require('./frame/frame.js');

const FrameRouter = new Router({
  prefix: '/'
})


FrameRouter.get('/tests', FrameWatcher.loadTests);   // list test commands

module.exports = FrameRouter;