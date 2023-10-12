import './App.css';
import Login from './Components/Login';
import React, { useState } from 'react';
// import Profile from './Components/Profile';
import { LoginContext } from './Contexts/LoginContext'
import MainRouter from './Router/MainRouter';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <MainRouter/> : <Login />}
      </LoginContext.Provider>
    </>
  );
}

export default App;
