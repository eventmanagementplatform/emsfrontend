import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import OrganizerRegister from './OrganizerRegistration';
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ marginTop: '0.5rem' }}> {/* Ensures space below header */}
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<OrganizerRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
