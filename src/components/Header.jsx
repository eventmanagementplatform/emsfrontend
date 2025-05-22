import { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

// Organizer info could also come from context or props; here we try localStorage
const organizer = JSON.parse(localStorage.getItem("organizer")) || { companyName: "Organizer", email: "organizer@email.com" };

const Header = ({ onLogout }) => {
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">EMS Platform</div>
            <div className="header-profile">
                <button
                    className="profile-btn"
                    onClick={() => setProfileOpen(o => !o)}
                    aria-label="Profile"
                >
                    <span role="img" aria-label="profile">👤</span>
                </button>
                {profileOpen && (
                    <div className="profile-dropdown">
                        <strong>Organizer Profile</strong>
                        <div style={{ margin: "10px 0" }}>
                            <div><b>Name:</b> {organizer.companyName}</div>
                            <div><b>Email:</b> {organizer.email}</div>
                        </div>
                        <button
                            onClick={onLogout}
                            className="logout-dropdown-btn"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    onLogout: PropTypes.func.isRequired
};

export default Header;