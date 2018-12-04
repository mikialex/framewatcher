
function logTestConfig(config) {
  console.log(config);
}

class FrameWatcher {
  static async loadTests(ctx) {
    ctx.body = global.testFileList;
  }
}

module.exports = FrameWatcher;

