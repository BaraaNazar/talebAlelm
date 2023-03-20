import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import LoadingPage from './containers/LoadingPage'
import SignUp from './containers/SignUp'
import Notification from './components/notification/notification'
import BookProfile from './components/bookProfile/BookProfile'


function App() {

  return (
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/notification' element={<Notification/>}></Route>
      <Route path='/BookProfile' element={<BookProfile/>}></Route>
    </Routes>
  )
}

export default App
