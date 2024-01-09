import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import RecoverPassword from './pages/Recover-password';
// import { RequireAuth } from './components/contexts/Auth/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

