const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
<<<<<<< HEAD
const path = require('path'); // 추가된 부분
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
// API 엔드포인트
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express backend!' });
});

<<<<<<< HEAD
<<<<<<< HEAD
// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../client/build')));

// 모든 요청을 index.html로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// 서버 실행
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});