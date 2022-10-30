import React from 'react';

function App(props) {

  const fetchCall = () => {
    fetch('http://localhost:8000/test')
  }

  return (
    <div>

      <button onClick={fetchCall} >API test</button>
      
    </div>
  );
}

export default App;