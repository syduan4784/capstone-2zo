<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import TextSearch from './pages/TextSearch';
import axios from 'axios';


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
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
>>>>>>> parent of ca30baf (UI 초안)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://52.78.154.108:3000/api/users'); // EC2 IP로 변경
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
>>>>>>> parent of eee1b1e (Merge pull request #3 from C7266/main)
=======
>>>>>>> parent of ca30baf (UI 초안)
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
