import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './assets/componants/login/Login.jsx';
import SignUp from './assets/componants/signup/Signup.jsx';
import Navbar from './assets/componants/navbar/Navbar.jsx';
import Password from './assets/componants/forget_password/Password.jsx';
import Report from './assets/componants/report/Report.jsx';
import Home from './assets/componants/home/Home.jsx';
import About from './assets/componants/about/About.jsx';
import Verfication from './assets/componants/verificationCode/verification.jsx'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/*" element={<Home />}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUP" element={<SignUp/>}/>
      <Route path="/Password" element={<Password/>}/>
      <Route path="/Report" element={<Report/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Verfication" element={<Verfication />}/>
      
      
    </Routes>

    </>
  )
}

export default App
