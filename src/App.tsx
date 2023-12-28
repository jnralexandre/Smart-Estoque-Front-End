import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RecoverPassword from './pages/Recover-password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      )
    </>
  )
}

export default App
