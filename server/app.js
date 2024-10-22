const express = require('express');
const cors = require('cors');
const path = require('path'); // 추가된 부분
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API 엔드포인트
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express backend!' });
});

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../client/build')));

// 모든 요청을 index.html로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});