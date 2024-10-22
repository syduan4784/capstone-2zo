// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import TextSearch from './pages/TextSearch';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 서버 API에 데이터 요청
    axios.get('http://52.78.154.108:3000/api/data')
      .then(response => {
        setData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />
        {/* 캘린더 페이지 */}
        <Route path="/calendar" element={<Calendar />} />
        {/* 텍스트 검색 페이지 */}
        <Route path="/search" element={<TextSearch />} />
      </Routes>
    </Router>
  );
}

export default App;