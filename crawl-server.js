const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 루트 엔드포인트
app.get('/', async (req, res) => {
  res.send('Puppeteer server is running!');
});

// ✅ 테스트용 엔드포인트 추가
app.get('/test', async (req, res) => {
  res.json({ success: true, message: 'Test endpoint works!' });
});

// 서버 실행
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on http://0.0.0.0:${port}`);
});
