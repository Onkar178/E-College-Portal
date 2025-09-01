import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const StudentHome = () => {
  const user = useSelector((state) => state.auth.user);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    if (user?.uid) {
      axios.get(`http://localhost:8081/student/uid/${user.uid}`)
        .then((res) => {
          const student = res.data;
          if (student && student.firstName && student.lastName) {
            setStudentName(`${student.firstName} ${student.lastName}`);
          } else {
            setStudentName(''); // profile not set yet
          }
        })
        .catch((err) => {
          console.error("Error fetching student profile:", err);
          setStudentName(''); // fallback
        });
    }
  }, [user?.uid]);

  return (
    <div className="bg-light p-5 rounded shadow-sm" style={{ backgroundColor: '#e6f2ff' }}>
      <h2 className="text-primary mb-3">
        Welcome, {studentName || 'Student'}!
      </h2>
      <p className="lead text-dark">
        {studentName
          ? "This is your dashboard home. Use the sidebar to navigate your profile, view enrolled courses, and more."
          : "Welcome to your dashboard! Please update your profile to personalize your experience."}
      </p>
      <hr />
      <p className="text-muted">
        Tip: Keep your profile up-to-date and check announcements regularly.
      </p>
    </div>
  );
};

export default StudentHome;
