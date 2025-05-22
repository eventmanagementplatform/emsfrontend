import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import OrganizerRegister from './OrganizerRegistration';
import LandingPage from './LandingPage';

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("organizer");
    navigate("/login");
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <div style={{ marginTop: '0.5rem' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<OrganizerRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

// AppWithRouter pattern to allow useNavigate in App
export default function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}