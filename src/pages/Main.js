// src/pages/Main.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Main.styled.css';
import camera from '../assets/camera.png';
import calendar from '../assets/calendar_image.png';
import glass from '../assets/reading_glasses.png';
import axios from 'axios';  // axios 임포트 추가

function Main() {
  const [today, setToday] = useState('');
  const [data, setData] = useState(null); // 서버에서 가져온 데이터를 저장할 상태

  // 현재 날짜를 가져와서 YYYY-MM-DD 형식으로 설정
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setToday(formattedDate);
  }, []);

  // 서버 API에 데이터 요청
  useEffect(() => {
    axios.get('http://52.78.154.108:3000/api/data') // 서버 주소에 맞게 수정
      .then(response => {
        setData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="main">
      {/* 상단 사용자 정보 및 날짜 */}
      <div className="header">
        <span>홍길동 님</span>
        <span>{today}</span> {/* 오늘 날짜를 표시 */}
        {/* 캘린더 아이콘을 클릭하면 캘린더 페이지로 이동 */}
        <Link to="/calendar">
          <button className="calendar-button">
            <span className="calendar-icon"><img src={calendar} width='30px'/></span>
          </button>
        </Link>
      </div>

      {/* 오늘의 약 정보 */}
      <div className="medication-card">
        <h2>오늘</h2>
        <div className="medication-list">
          <p>페니라민정</p>
          <p>암브로콜정</p>
          <p>프리비투스 현탁액</p>
        </div>
      </div>

      {/* 서버에서 가져온 데이터 표시 */}
      <div className="server-data">
        {data ? <p>{data.message}</p> : <p>로딩 중...</p>} {/* 데이터가 있을 때 메시지 표시 */}
      </div>

      {/* 검색 버튼 섹션 */}
      <div className="button-section">
        {/* 약 검색 버튼 */}
        <Link to="/search">
          <button className="search-button">
            <span className="search-icon"><img src={glass} width='50px'/></span>
            <span>약 검색</span> {/* 아이콘 아래 텍스트 출력 */}
          </button>
        </Link>

        {/* 사진 검색 버튼 */}
        <button className="camera-button">
          <span className="camera-icon"><img src={camera} width='50px'/></span>
          <span>사진 검색</span> {/* 아이콘 아래 텍스트 출력 */}
        </button>
      </div>
    </div>
  );
}

export default Main;