const fs = require('fs');
const path = require('path');
const fileUtil = require('./util/file');

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
  global.testDesFolder = global.workspaceRoot + '/test/';
}

function loadAlltest() {
  const testFileList = fileUtil.loadAllFileInFolderAsStringList(global.testDesFolder);
  global.testFileList = testFileList;
  return testFileList;
}

module.exports = {
  setupGlobal,
  loadAlltest
};