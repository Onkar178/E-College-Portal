
// // src/components/staff/RegisteredStudents.js
// import React, { useEffect, useState } from "react";
// import staffAxios from "../../api/staffAxios";

// const RegisteredStudents = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState("");
//   const [students, setStudents] = useState([]);

//   // Fetch all events for dropdown
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await staffAxios.get("/events");
//         setEvents(response.data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   // Fetch students registered for a specific event
//   const fetchRegisteredStudents = async (eventId) => {
//     try {
//       const response = await staffAxios.get(`/events/${eventId}/students`);
//       setStudents(response.data);
//     } catch (error) {
//       console.error("Error fetching registered students:", error);
//     }
//   };

//   // Handle event selection
//   const handleEventChange = (e) => {
//     const eventId = e.target.value;
//     setSelectedEvent(eventId);
//     if (eventId) {
//       fetchRegisteredStudents(eventId);
//     } else {
//       setStudents([]);
//     }
//   };

//   return (
//     <div className="p-4 bg-white shadow rounded-xl">
//       <h2 className="text-xl font-bold mb-4">Registered Students</h2>

//       {/* Event Selection Dropdown */}
//       <select
//         value={selectedEvent}
//         onChange={handleEventChange}
//         className="w-full p-2 border rounded mb-4"
//       >
//         <option value="">Select an Event</option>
//         {events.map((event) => (
//           <option key={event.eventId} value={event.eventId}>
//             {event.title}
//           </option>
//         ))}
//       </select>

//       {/* Students List */}
//       {students.length > 0 ? (
//         <ul>
//           {students.map((student) => (
//             <li key={student.sid} className="border p-3 rounded mb-2">
//               <p>
//                 <strong>{student.name}</strong> ({student.email})
//               </p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         selectedEvent && <p>No students registered yet.</p>
//       )}
//     </div>
//   );
// };

// export default RegisteredStudents;


// src/components/staff/RegisteredStudents.js
import React, { useEffect, useState } from "react";
import staffAxios from "../../api/staffAxios";

const RegisteredStudents = () => {
  const [registrations, setRegistrations] = useState([]);

  // Fetch all registered student-event details
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await staffAxios.get("/registeredevents/details"); // ✅ updated endpoint
        setRegistrations(response.data);
      } catch (error) {
        console.error("Error fetching registered event details:", error);
      }
    };
    fetchRegistrations();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Registered Students</h2>

      {registrations.length > 0 ? (
        <ul>
          {registrations.map((reg) => (
            <li key={reg.regId} className="border p-3 rounded mb-2">
              <p>
                <strong>
                  {reg.firstName} {reg.lastName}
                </strong>{" "}
                → <span className="text-blue-600">{reg.eventName}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students registered yet.</p>
      )}
    </div>
  );
};

export default RegisteredStudents;
