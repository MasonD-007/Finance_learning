import { useState } from 'react'
import { Userpage } from './pages/Userpage'
import { Login } from './pages/Login'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Userpage />
      </Router>
    </>
  )
}

export default App
