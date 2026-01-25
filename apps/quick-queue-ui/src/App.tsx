import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '@/components/home';
import { Signup } from '@/components/auth/Signup';
import { Login } from '@/components/auth/Login';
import { Dashboard } from '@/components/dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/signup" element={<Signup />} />
        <Route path="/doctor/login" element={<Login />} />
        <Route path="/doctor/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
