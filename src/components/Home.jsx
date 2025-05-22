import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import AddEvent from './AddEvent';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [addEventMessage, setAddEventMessage] = useState('');
  const [addEventMsgType, setAddEventMsgType] = useState('');
  const [emsregistrationId, setEmsregistrationId] = useState(() => localStorage.getItem('emsregistrationId'));

  // Fetch events for the logged-in user
  const fetchEvents = () => {
    if (!emsregistrationId) {
      setEvents([]);
      return;
    }
    fetch(`http://localhost:5000/api/events/${emsregistrationId}`)
      .then(res => res.json())
      .then(res => {
        console.log("API /api/events response:", res);
        // Accepts both array and {events: [...]}
        if (Array.isArray(res)) {
          setEvents(res);
        } else if (res && Array.isArray(res.events)) {
          setEvents(res.events);
        } else {
          setEvents([]);
        }
      })
      .catch((err) => {
        setEvents([]);
        console.error('Failed to fetch events:', err);
      });
  };

  // Initial fetch and update emsregistrationId from localStorage, in case it changes
  useEffect(() => {
    setEmsregistrationId(localStorage.getItem('emsregistrationId'));
  }, []);

  // Fetch events anytime emsregistrationId changes
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
  }, [emsregistrationId]);

  // Called by AddEvent after a successful event addition
  const handleEventAdded = (message, type = 'success') => {
    setAddEventMessage(message);
    setAddEventMsgType(type);
    fetchEvents(); // Immediately refresh the events table!
    setTimeout(() => {
      setAddEventMessage('');
      setAddEventMsgType('');
    }, 2500);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#e9f2fb" }}>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          {/* Left section - Add Event */}
          <div className="col-12 col-md-4 d-flex align-items-start justify-content-end" style={{ paddingRight: "10px" }}>
            <div style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 2px 16px 0 #0001",
              padding: "32px 24px",
              width: "100%",
              maxWidth: 400
            }}>
              {addEventMessage && (
                <div
                  className={`mb-3 p-2 text-center fw-bold rounded ${addEventMsgType === 'success'
                    ? 'text-success border border-success bg-success bg-opacity-10'
                    : 'text-danger border border-danger bg-danger bg-opacity-10'
                    }`}
                >
                  {addEventMessage}
                </div>
              )}
              <AddEvent onEventAdded={handleEventAdded} />
            </div>
          </div>
          {/* Right section - Events Table */}
          <div className="col-12 col-md-8 d-flex align-items-start justify-content-start" style={{ paddingLeft: ".5px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 2px 16px 0 #0001",
                padding: "32px 24px",
                width: "100%",
                maxWidth: "100%",
                overflow: "auto"
              }}
            >
              <h2 style={{ margin: 0, marginBottom: 24, color: "#1a202c" }}>Your Events</h2>
              <table className="table table-bordered" style={{ width: "100%", background: "#fff", borderRadius: "8px", overflow: "hidden", marginTop: 0 }}>
                <thead className="thead-light">
                  <tr>
                    <th style={{ color: "#1a202c", fontWeight: 600 }}>Event Title</th>
                    <th style={{ color: "#1a202c", fontWeight: 600 }}>Event Type</th>
                    <th style={{ color: "#1a202c", fontWeight: 600 }}>Price</th>
                    <th style={{ color: "#1a202c", fontWeight: 600 }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {events.length > 0 ? events.map(event => (
                    <tr key={event._id || event.id}>
                      <td style={{ color: "#222" }}>{event.eventTitle}</td>
                      <td style={{ color: "#222" }}>
                        {Array.isArray(event.eventType)
                          ? event.eventType.join(', ')
                          : event.eventType}
                      </td>
                      <td style={{ color: "#222" }}>{event.price}</td>
                      <td style={{ color: "#222" }}>{event.description}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} style={{ textAlign: "center", padding: "32px", color: "#555" }}>
                        No events found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;