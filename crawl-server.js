const puppeteer = require('puppeteer-core');
const chromePath = process.env.PUPPETEER_EXECUTABLE_PATH;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log(await page.title());

  await browser.close();
})();
