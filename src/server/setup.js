const fs = require('fs');
const path = require('path');
const fileUtil = require('./util/file');

function createMockServer() {
  const port = 8081;
  // const httpServer = require('http-server');
  // const path = require('path');
  // const mockServer = httpServer.createServer({
  //   root: path.resolve(__dirname, './html')
  // });
  // mockServer.listen(port);

  const mockServerURL = `http://127.0.0.1:${port}/`
  global.mockServerURL = mockServerURL;
}

function setupGlobal() {
  // const currentAbsolutePath = path.resolve('./', rootConfigPasthParam);
  const currentAbsolutePath = '/Users/mikialex/Desktop/framewatcher/workspace/';
  const rootConfigFile = currentAbsolutePath + 'framewatcher.json';
  global.rootConfig = JSON.parse(fs.readFileSync(rootConfigFile));
  console.log(rootConfig);

  global.workspaceRoot = path.resolve(currentAbsolutePath, rootConfig.workSpaceRoot);
  console.log(`workspace found: ${global.workspaceRoot}`);

  global.diffResultFolder = global.workspaceRoot + '/diff/';
  global.resultFolder = global.workspaceRoot + '/result/';
  global.specFolder = global.workspaceRoot + '/spec/';
  global.testDesFolder = path.resolve(currentAbsolutePath, rootConfig.projectRoot);
}

const testFileReg = /fw.ts$/
function loadAlltest() {
  const testFileList = fileUtil.loadAllFileInFolderAsStringList(global.testDesFolder, testFileReg);
  if (testFileList.length === 0) {
    console.log(`no test file found in project folder: ${global.testDesFolder}`);
    console.log(`stop and quit`);
    process.abort();
  }
  global.testFileList = testFileList;
  return testFileList;
}

module.exports = {
  setupGlobal,
  loadAlltest,
  createMockServer
};