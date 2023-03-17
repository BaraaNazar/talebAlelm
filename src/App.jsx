import { useState } from 'react'
import Home from './containers/Home'
import LoadingPage from './containers/LoadingPage'
import SignUp from './containers/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoadingPage/>
      <SignUp/>
      <Home/>
    </div>
  )
}

export default App
