import React, { useEffect, useState } from 'react';
import { getHello } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const helloMessage = await getHello();
      setMessage(helloMessage);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
