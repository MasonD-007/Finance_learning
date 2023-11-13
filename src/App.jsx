import { useState } from 'react'
import { Homepage } from './pages/Homepage'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Homepage />
      </Router>
      <div className="App">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}

export default App
