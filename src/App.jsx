import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import LoadingPage from './containers/LoadingPage'
import SignUp from './containers/SignUp'
import Notification from './components/notification/notification'


function App() {

  return (
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/notification' element={<Notification/>}></Route>
    </Routes>
  )
}

export default App
