import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // ✅ Get logged-in user from Redux store
  const user = useSelector((state) => state.auth.user);

  // Fetch all courses
  useEffect(() => {
    axios
      .get("http://localhost:8081/student/course/getAllCourses")
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load courses");
        setLoading(false);
      });
  }, []);

  // Handle enrollment
  const handleEnroll = async (courseId) => {
    if (!user || !user.uid) {
      setError("User not logged in.");
      setMessage(null);
      return;
    }

    setError(null);
    setMessage(null);

    try {
      const res = await axios.post(
        "http://localhost:8081/student/courseEnrollment/enroll", // ✅ Correct path
        null,
        { params: { uid: user.uid, courseId } }
      );

      // Ensure success message is always a string
      const msg =
        typeof res.data === "object"
          ? res.data.message || JSON.stringify(res.data)
          : res.data;

      setMessage(msg);
    } catch (err) {
      let errorMsg;
      if (err.response?.data) {
        errorMsg =
          typeof err.response.data === "object"
            ? err.response.data.message || JSON.stringify(err.response.data)
            : err.response.data;
      } else {
        errorMsg = `Failed to enroll in course ${courseId}`;
      }
      setError(errorMsg);
    }
  };

  if (loading) return <div>Loading courses...</div>;

  return (
    <div>
      <h3>Courses</h3>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="list-group">
          {courses.map((course) => (
            <div key={course.courseId} className="list-group-item">
              <h5>{course.courseName}</h5>
              <p>{course.description}</p>
              <small>
                Duration:{" "}
                {course.startDate
                  ? new Date(course.startDate).toLocaleDateString()
                  : "N/A"}{" "}
                -{" "}
                {course.endDate
                  ? new Date(course.endDate).toLocaleDateString()
                  : "N/A"}
              </small>
              <br />
              <button
                onClick={() => handleEnroll(course.courseId)}
                className="btn btn-primary mt-2"
              >
                Enroll
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
