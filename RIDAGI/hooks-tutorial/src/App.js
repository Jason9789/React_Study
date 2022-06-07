import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

import Info from './Components/Info';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className='App'>
      <Counter />

      <br />
      <br />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
