require('./setup').createMockServer();
require('./setup').setupGlobal();
require('./setup').loadAlltest();

const ptrr = require('./frame/puppeteer');

async function runAllTest() {
  await ptrr.runTest();
  process.exit();
}

runAllTest();
