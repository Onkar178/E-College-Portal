import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const API_BASE = "http://localhost:8081";

export default function RegisteredEvents() {
  const uid = useSelector((state) => state.auth.user?.uid);

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRegisteredEvents();
  }, []);

  const fetchRegisteredEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/registeredEvent/student/${uid}`);
      setRegisteredEvents(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Registered Events</h2>
      {loading && <p>Loading registered events...</p>}
      {registeredEvents.length === 0 && !loading && <p>No events registered yet.</p>}
      <div className="row">
        {registeredEvents.map((event) => (
          <div key={event.eventId} className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{event.eventName}</h5>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {new Date(event.dateTime).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




