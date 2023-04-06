import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import LoginPageNew from './Components/LoginPageNew';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginPageNew/>} />
            <Route exact path='/dashboard' element={<Dashboard/>} />          
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
