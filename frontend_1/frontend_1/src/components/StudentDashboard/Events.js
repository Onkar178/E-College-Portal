import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const API_BASE = "http://localhost:8081"; // your backend URL

export default function Events() {
  const uid = useSelector((state) => state.auth.user?.uid);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/event/getAllEvents`);
      setEvents(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch events");
    } finally {
      setLoading(false);
    }
  };

  const registerForEvent = async (eventId) => {
    try {
      const res = await axios.post(
        `${API_BASE}/registeredEvent/register/${uid}/${eventId}`
      );
      alert(res.data);
      fetchEvents(); // optionally refresh events or registered events section
    } catch (err) {
      console.error(err);
      alert(err.response?.data || "Failed to register for event");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Events</h2>
      {loading && <p>Loading events...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {events.map((event) => (
          <div key={event.eventId} className="col-md-6 mb-3">
            <div className="card p-3 shadow-sm">
              <h5>{event.eventName}</h5>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {new Date(event.dateTime).toLocaleString()}</p>
              <button
                className="btn btn-primary"
                onClick={() => registerForEvent(event.eventId)}
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
