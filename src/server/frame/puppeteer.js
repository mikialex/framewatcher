const puppeteer = require('puppeteer');

async function createPuppeteerBrowser() {
  return await puppeteer.launch(
    {
      args: [
          // '--no-sandbox',
          // '--disable-setuid-sandbox',
          // '--disable-web-security'
      ],
      ignoreHTTPSErrors: true,
      devtools: true,
      headless: true,
      defaultViewport: {
        width: 200,
        height: 200
      }
    }
  );
}

async function createPage(browser) {
  return await browser.newPage();
}

async function gotoURL(page, url){
  return await page.goto(url, { waitUntil: 'networkidle2' });
}

async function saveScreenShot(page, pathToSave) {
  await page.screenshot({
    path: pathToSave,
    type: 'png',
  });
}
var testToRun;
async function runTest(url, imageDistDirPath, testScript) {
  const browser = await createPuppeteerBrowser();
  const page = await createPage(browser);
  await gotoURL(page, url);

  // expose log function for log in node from browser
  await page.exposeFunction('frameLog', (log) => {
    console.log('frameLog: ' + log);
  })

  // add test collection function in browerser env
  await page.evaluate(() => {
    window.describe = function (testName, testFunc) {
      window.testStr = testFunc.toString();
      frameLog(testStr)
    }
  })

  // expose a function to get test decrpition from browser env
  await page.exposeFunction('loadTestOver', (testFunctionStr) => {
    testToRun = testFunctionStr;
  })

  // expose imageDiff prediction 
  await page.exposeFunction('expectFrame', async (frameName) => {
    const filePath = imageDistDirPath + frameName + '.png';
    console.log(`wirte image file to: ${filePath}`);
    await saveScreenShot(page, filePath);
  })

  // start load test
  await page.evaluate(testScript);
  await page.evaluate(() => {
    loadTestOver(window.testStr);
  });
  console.log(testToRun);
  await page.evaluate('(' + testToRun + ')()');
}


module.exports = {
  createPuppeteerBrowser,
  saveScreenShot,
  createPage,
  gotoURL,
  runTest
}