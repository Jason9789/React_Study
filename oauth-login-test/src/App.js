import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Main from './Components/Main'
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 