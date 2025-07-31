const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: "new", // 최신 버전에서 권장되는 설정
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Render 환경에서 필수
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");

  // ...
  await browser.close();
})();
