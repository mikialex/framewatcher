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

async function runTest() {
  const browser = await createPuppeteerBrowser();
  const page = await createPage(browser);
  injectBasicUtil(page);

  await page.coverage.startJSCoverage({ reportAnonymousScripts: true });

  const imageDistDirPath = global.resultFolder
  // expose imageDiff prediction 
  await page.exposeFunction('expectFrame', async (frameName) => {
    const filePath = imageDistDirPath + frameName + '.png';
    console.log(`wirte image file to: ${filePath}`);
    try {
      await saveScreenShot(page, filePath);
    } catch (error) {
      console.log('save error:\n' + error)
    }
  })

  const testWaiter = new Promise(async (resolve) => {
    await page.exposeFunction('finishTest', async (frameName) => {
      resolve();
    })
  })

  await gotoURL(page, global.mockServerURL);
  const t = require('fs').readFileSync('/Users/mikialex/Desktop/framewatcher/workspace/html/dist/artglwebpack.js', "utf-8");
  await page.evaluate(t);
  await testWaiter;

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