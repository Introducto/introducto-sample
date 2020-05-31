import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hello, setHello] = useState(0);

  useEffect(() => {
      fetch('/hello')
          .then(res => res.text())
          .then(data => {
              setHello(data);
          });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{hello}</p>
      </header>
    </div>
  );
}

export default App;
