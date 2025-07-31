const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 기존 루트 라우터
app.get('/', async (req, res) => {
  res.send('Puppeteer server is running!');
});

// ✅ 추가: 테스트용 라우터
app.get('/test', async (req, res) => {
  res.json({ status: 'ok', message: 'Test API 연결 성공!' });
});

// 서버 실행
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on http://0.0.0.0:${port}`);
});
