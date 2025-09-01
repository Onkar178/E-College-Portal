// import React, { useEffect, useState } from "react";
// import staffAxios from "../../api/staffAxios";

// const EventSection = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({
//     eventName: "",
//     description: "",
//     startDate: "",
//     endDate: ""
//   });

//   // Fetch all events
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await staffAxios.get("/events/all");
//         setEvents(res.data);
//       } catch (error) {
//         console.error("Error fetching events", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // Handle form change
//   const handleChange = (e) => {
//     setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
//   };

//   // Create new event
//   const handleCreateEvent = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await staffAxios.post("/events", newEvent);
//       setEvents([...events, res.data]); // update list
//       setNewEvent({ eventName: "", description: "", startDate: "", endDate: "" });
//     } catch (error) {
//       console.error("Error creating event", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="mb-4 text-primary">📅 Manage Events</h2>

//       {/* Event Creation Form */}
//       <div className="card shadow-sm mb-4">
//         <div className="card-body">
//           <h5 className="card-title mb-3">Create New Event</h5>
//           <form onSubmit={handleCreateEvent}>
//             <div className="mb-3">
//               <label className="form-label">Event Name</label>
//               <input
//                 type="text"
//                 name="eventName"
//                 className="form-control"
//                 placeholder="Enter event name"
//                 value={newEvent.eventName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea
//                 name="description"
//                 className="form-control"
//                 placeholder="Enter event description"
//                 rows="3"
//                 value={newEvent.description}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <label className="form-label">Start Date</label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   className="form-control"
//                   value={newEvent.startDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="col-md-6 mb-3">
//                 <label className="form-label">End Date</label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   className="form-control"
//                   value={newEvent.endDate}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className="btn btn-primary w-100">
//               ➕ Create Event
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Event List */}
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <h5 className="card-title mb-3">All Events</h5>
//           {events.length > 0 ? (
//             <ul className="list-group">
//               {events.map((event) => (
//                 <li
//                   key={event.eventId}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                 >
//                   <div>
//                     <strong>{event.eventName}</strong>
//                     <br />
//                     <small className="text-muted">
//                       {event.startDate} → {event.endDate}
//                     </small>
//                   </div>
//                   <span className="badge bg-info text-dark">📌 Active</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-muted">No events available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventSection;


// src/components/staff/EventSection.js
import React, { useEffect, useState } from "react";
import staffAxios from "../../api/staffAxios";

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    description: "",
    dateTime: ""
  });

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await staffAxios.get("/events/all");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Create new event
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      await staffAxios.post("/events/create", newEvent);
      setNewEvent({ eventName: "", description: "", dateTime: "" });
      fetchEvents(); // refresh list
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  // Set min value for datetime-local input (today + current time)
  const getMinDateTime = () => {
    const now = new Date();
    now.setSeconds(0, 0); // remove seconds & ms for consistency
    return now.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-primary">📅 Manage Events</h2>

      {/* Event Creation Form */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title mb-3">Create New Event</h5>
          <form onSubmit={handleCreateEvent}>
            <div className="mb-3">
              <label className="form-label">Event Name</label>
              <input
                type="text"
                name="eventName"
                className="form-control"
                placeholder="Enter event name"
                value={newEvent.eventName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                placeholder="Enter event description"
                rows="3"
                value={newEvent.description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Event Date & Time</label>
              <input
                type="datetime-local"
                name="dateTime"
                className="form-control"
                value={newEvent.dateTime}
                onChange={handleChange}
                min={getMinDateTime()} // restrict past
                required
              />
              <small className="text-muted">
                You can only choose today's or future dates.
              </small>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ➕ Create Event
            </button>
          </form>
        </div>
      </div>

      {/* Event List */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">All Events</h5>
          {events.length > 0 ? (
            <ul className="list-group">
              {events.map((event) => (
                <li
                  key={event.eventId}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{event.eventName}</strong>
                    <br />
                    <small className="text-muted">
                      {new Date(event.dateTime).toLocaleDateString()} {" • "}
                      {new Date(event.dateTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </small>
                    <br />
                    <span>{event.description}</span>
                  </div>
                  <span className="badge bg-info text-dark">📌 Scheduled</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No events available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
