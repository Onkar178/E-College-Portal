import React from 'react';
import { Link } from 'react-router-dom';
import '../CourseFeatures.css'; // <-- Add this for animations

const CourseFeatures = () => {
  const courses = [
    { id: 'software-engineering', name: 'Software Engineering' },
    { id: 'full-stack-development', name: 'Full Stack Development' },
    { id: 'mobile-app-development', name: 'Mobile App Development' },
    { id: 'data-science-ai', name: 'Data Science & AI' },
    { id: 'cybersecurity', name: 'Cybersecurity' },
  ];

  return (
    <div
      className="position-absolute shadow bg-white rounded p-3 dropdown-animate"
      style={{
        // top: '100%',
        top: 'calc(100% + 21px)',

        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1050,
        width: '280px',
      }}
    >
      <h6 className="fw-bold mb-3" style={{ color: '#87CEFA' }}>Courses</h6>
      {courses.map((course) => (
        <Link
          key={course.id}
          to={`/courses/${course.id}`}
          className="d-block text-decoration-none text-dark py-2 px-2 rounded hover-bg"
        >
          {course.name}
        </Link>
      ))}
    </div>
  );
};

export default CourseFeatures;
