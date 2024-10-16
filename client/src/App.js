import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Express 서버의 API를 호출
    axios.get('http://52.78.154.108:3000/api')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;