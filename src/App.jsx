import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './containers/Home'
import LoadingPage from './containers/LoadingPage'
import SignUp from './containers/SignUp'


function App() {

  return (
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
    </Routes>
  )
}

export default App
