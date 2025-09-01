// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// export default function EnrolledCourses() {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Get sid from Redux or localStorage
//   const sid = useSelector((state) => state.auth.sid) || localStorage.getItem("sid");

//   useEffect(() => {
//     if (!sid) {
//       setError("Student ID not found.");
//       setLoading(false);
//       return;
//     }

//     axios
//       .get(`http://localhost:8081/student/courseEnrollment/student/${sid}`)
//       .then((res) => {
//         setCourses(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching enrolled courses", err);
//         setError("Failed to load enrolled courses.");
//         setLoading(false);
//       });
//   }, [sid]);

//   if (loading) return <p>Loading enrolled courses...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   if (courses.length === 0) return <p>No enrolled courses found.</p>;

//   return (
//     <div>
//       <h2>My Enrolled Courses</h2>
//       <ul>
//         {courses.map((course) => (
//           <li key={course.courseId}>
//             <strong>{course.courseName}</strong> — {course.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Get sid safely from Redux user object
  const sid = useSelector((state) => state.auth.user?.sid);

  useEffect(() => {
    // Optional: Save sid to localStorage when it changes
    if (sid) {
      localStorage.setItem("sid", sid);
    }
  }, [sid]);

  useEffect(() => {
    const storedSid = sid || localStorage.getItem("sid");

    if (!storedSid) {
      setError("Student ID not found.");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:8081/student/courseEnrollment/student/${storedSid}`)
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching enrolled courses", err);
        setError("Failed to load enrolled courses.");
        setLoading(false);
      });
  }, [sid]);

  if (loading) return <p>Loading enrolled courses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (courses.length === 0) return <p>No enrolled courses found.</p>;

  return (
    <div>
      <h2>My Enrolled Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.courseId}>
            <strong>{course.courseName}</strong> — {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
