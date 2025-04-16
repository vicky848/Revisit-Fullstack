import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './AuthenticationPages/Login'
import Signup from './AuthenticationPages/Signup'
import Dashboard from './AuthenticationPages/Dashboard';
import'./App.css'


function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
