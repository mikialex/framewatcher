const puppeteer = require('puppeteer');

async function findAllTestConfig() {
  
}

function logTestConfig(config) {
  
}

async function runTest(config) {
  logTestConfig();
  const browser = await puppeteer.launch(
    {
      headless: true,
      defaultViewport: {
        width: 1920,
        height: 1080
      }
    }
  );
  const page = await browser.newPage();
}

async function runAllTest() {
  const testConfigs = await findAllTestConfig();

  for (let i = 0; i < testConfigs.length; i++) {
    const config = testConfigs[i];
    await runTest(config);
  }
}
