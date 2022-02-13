import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Main from './Components/Main'
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {/* v6인 경ㅜㅔ는 component 대신 element를 사용해야 한다. */}
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 