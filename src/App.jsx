import { useContext } from 'react'
import { Userpage } from './pages/Userpage'
import { Login } from './pages/Login'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import './style.scss';

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <>
      <Router>
        <Routes path='/'>
          <Route index element={
          <ProtectedRoute>
            <Userpage />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
