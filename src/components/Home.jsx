import { useState } from 'react';
import { Link } from "react-router-dom";
import AddEvent from './AddEvent';

const Home = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);

  return (
    <div
      style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <h1>Login Success Page</h1>

      <button
        className="btn btn-success my-2"
        onClick={() => setShowAddEvent(!showAddEvent)}
      >
        {showAddEvent ? "Close Add Event" : "Add Event"}
      </button>

      {showAddEvent && <AddEvent />}

      <Link to='/login' className="btn btn-light my-3">Logout</Link>
    </div>
  );
};

export default Home;
