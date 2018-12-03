const puppeteer = require('puppeteer');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const testDir = './test';
const goldenDir = './good';
const diffDir = './diff'

async function makeADiffTest(config) {
  const name = config.name;
  const sceneFile = config.inputfile;
  console.log(`start diff test: ${name}`);
  console.log(`  use scene file: ${name}`);

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
  await page.goto('http://localhost:7666', { waitUntil: 'networkidle2' });

  const inputElement = await page.$('#auto-load');
  await inputElement.uploadFile(`./file/${sceneFile}.bin`);

  // const canvas = await page.$('#egsViewer');

  await page.screenshot({
    path: `./test/${name}.png`,
    type: 'png',
  });


  await compareScreenshots(config);

  await browser.close();
}



async function compareScreenshots(config) {
  const goodRef = config.goodRef;
  const name = config.name;


  return new Promise((resolve, reject) => {
    const img1 = fs.createReadStream(`${testDir}/${name}.png`).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`${goldenDir}/${goodRef}.png`).pipe(new PNG()).on('parsed', doneReading);

    let filesRead = 0;
    function doneReading() {
      if (++filesRead < 2) return;

      // Do the visual diff.
      const diff = new PNG({ width: img1.width, height: img2.height });
      const numDiffPixels = pixelmatch(
        img1.data, img2.data, diff.data, img1.width, img1.height,
        { threshold: 0.1 });
      
      console.log(`  diff test ${name} has diff ${numDiffPixels}`)

      diff.pack().pipe(fs.createWriteStream(`./${diffDir}/diff_${name}.png`));

      resolve();
    }
  });
}


module.exports = makeADiffTest;