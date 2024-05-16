import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';
import { useState } from 'react';

function App() {
  const [state,setState] = useState(false)
  return (
    <>
    {
    //   <Redirect
    //   to={{
    //     pathname: "/",
    //   }}
    // />
    }
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/registration' element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



