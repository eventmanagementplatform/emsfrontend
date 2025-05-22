import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events") // adjust endpoint if needed
      .then(res => setEvents(res.data.events || []));
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "80vh" }}>
      {/* Left section */}
      <div style={{ width: "20%", background: "#f0f4fa", padding: "30px 10px" }}>
        <button style={{ width: "100%" }}>Add Event</button>
      </div>
      {/* Right section */}
      <div style={{ width: "80%", padding: "30px" }}>
        <h2>Events</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Event Type</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event._id}>
                <td>{event.eventTitle}</td>
                <td>{event.eventType}</td>
                <td>{event.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;