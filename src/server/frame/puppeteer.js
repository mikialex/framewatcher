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

async function injectBasicUtil(page) {
    // expose log function for log in node from browser
    await page.exposeFunction('frameLog', (log) => {
      console.log('frameLog: ' + log);
    })
}

async function preFetchTestDescription(testScript){
  const browser = await createPuppeteerBrowser();
  const page = await createPage(browser);
  await gotoURL(page, global.mockServerURL);
  injectBasicUtil(page);

  // add test collection function in browerser env
  await page.evaluate(() => {
    window.describe = function (testName, testFunc) {
      frameLog('des');
      window.testName = testName;
      window.testStr = testFunc.toString();
    }
  })

  let descrpition;
  let functionStr;
  // expose a function to get test decrpition from browser env
  await page.exposeFunction('loadTestOver', (testDescription, testFunctionStr) => {
    descrpition = testDescription;
    functionStr = testFunctionStr;
  })

  await page.evaluate(testScript);
  await page.evaluate(() => {
    loadTestOver(window.testName, window.testStr);
  });

  await browser.close();

  return {
    descrpition, functionStr, testScript
  }
}

async function runTest(testScript) {
  const browser = await createPuppeteerBrowser();
  const page = await createPage(browser);
  injectBasicUtil(page);
  await page.coverage.startJSCoverage({ reportAnonymousScripts: true });
  await gotoURL(page, global.mockServerURL);

  const imageDistDirPath = global.resultFolder
  // expose imageDiff prediction 
  await page.exposeFunction('expectFrame', async (frameName) => {
    const filePath = imageDistDirPath + frameName + '.png';
    console.log(`wirte image file to: ${filePath}`);
    await saveScreenShot(page, filePath);
  })

  const testInfo = await preFetchTestDescription(testScript);


  console.log(testInfo);
  await page.evaluate('(' + testInfo.functionStr + ')()');
  // await page.addScriptTag({content: '(' + testInfo.functionStr + ')()'})
  const jsCoverage = await page.coverage.stopJSCoverage();

  const pti = require('puppeteer-to-istanbul')
  pti.write(jsCoverage)

  await browser.close();
  console.log('test over');
}


module.exports = {
  createPuppeteerBrowser,
  saveScreenShot,
  createPage,
  gotoURL,
  runTest
}