import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import AddEvent from './AddEvent';

const ADA_BG_COLOR = "#e9f2fb";

const cardStyle = {
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 2px 16px 0 #0001",
  padding: "32px 24px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box"
};

const Home = () => {
  const [events, setEvents] = useState([]);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState("auto");
  const emsregistrationId = localStorage.getItem('emsregistrationId');

  useEffect(() => {
    if (emsregistrationId) {
      fetchEvents();
    }
    // eslint-disable-next-line
  }, [emsregistrationId]);

  useLayoutEffect(() => {
    if (leftCardRef.current) {
      setCardHeight(leftCardRef.current.offsetHeight + "px");
    }
  }, [events]);

  const fetchEvents = () => {
    fetch(`http://localhost:5000/api/events/${emsregistrationId}`)
      .then(res => res.json())
      .then(res => setEvents(res.events || []));
      
  };

  return (
    <div style={{ minHeight: "100vh", background: ADA_BG_COLOR }}>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          {/* Left section - Add Event */}
          <div className="col-12 col-md-4 d-flex align-items-start justify-content-end" style={{ paddingRight: "1px" }}>
            <div ref={leftCardRef} style={{ ...cardStyle, maxWidth: 400, width: "100%" }}>
              <AddEvent onEventAdded={fetchEvents} />
            </div>
          </div>
          {/* Right section - Events Table */}
          <div className="col-12 col-md-8 d-flex align-items-start justify-content-start" style={{ paddingLeft: "5px" }}>
            <div
              ref={rightCardRef}
              style={{
                ...cardStyle,
                maxWidth: "100%",
                width: "100%",
                height: cardHeight,
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
                    <tr key={event._id}>
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