import { useState } from 'react'
import LoadingPage from './containers/LoadingPage'
import SignUp from './containers/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoadingPage/>
      <SignUp/>
    </div>
  )
}

export default App
