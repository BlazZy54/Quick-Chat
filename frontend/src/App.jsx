import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import React, { useEffect } from 'react'
import {authStore} from "./ZustandStore/store.js"
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useclientSocket from "./Socket/useclientSocket.js"



function App() {
  const {authUser, setauthUser} = authStore() //authenticated or not

  const verifyCookie = async () => {
    const res = await fetch('/api/verifycookie')
    const data = await res.json()
    setauthUser(data.user)
  }

  useEffect(()=>{
      verifyCookie()
  },[])

  useclientSocket() //now it will re-run as it has useEffect with dependency on authUser (only call once this hook)

  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={authUser ? <Navigate to='/'/> : <Login/>} />
          <Route path='/signup' element={authUser ? <Navigate to='/'/> : <Signup/>} />
          <Route path='/' element={!authUser ? <Navigate to='/login'/> : <Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
