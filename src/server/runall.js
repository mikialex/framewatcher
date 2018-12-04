require('./setup').createMockServer();
require('./setup').setupGlobal();
require('./setup').loadAlltest();

const ptrr = require('./frame/puppeteer');

async function runAllTest() {
  for (let i = 0; i < global.testFileList.length; i++) {
    const config = global.testFileList[i];
    await ptrr.runTest(config.fileContent);
  }

  process.exit();

}

runAllTest();
