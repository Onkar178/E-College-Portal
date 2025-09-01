// StudentDashboard.js

import React from 'react';
import { Link, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

// Import student components
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import AllCourses from './AllCourses';
import EnrolledCourses from './EnrolledCourses';
import PlacementDashboard from './PlacementDashboard';
import PlacementApplication from './PlacementApplication'; 
import Feedback from './Feedback'; 
import Events from './Events'; 
import RegisteredEvents from './RegisteredEvents';
import Announcements from './Announcements'; // <-- NEW IMPORT

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-white border-end shadow-sm px-0">
          <div className="bg-primary text-white text-center py-3">
            <h5 className="mb-0">🎓 Student Portal</h5>
          </div>
          <ul className="nav flex-column p-3">
            <li className="nav-item mb-2">
              <Link
                to="/student/home"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/home') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/profile"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/profile') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                👤 Profile
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/allcourses"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/allcourses') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                📚 All Courses
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/enrolledcourses"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/enrolledcourses') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                🎯 Enrolled Courses
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/placements"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/placements') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                💼 Placements
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/placementapplications"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/placementapplications') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                📄 Placement Applications
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/feedback"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/feedback') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                📝 Feedback
              </Link>
            </li>

            {/* New Events Section */}
            <li className="nav-item mb-2">
              <Link
                to="/student/events"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/events') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                🎉 Events
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/student/registeredevents"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/registeredevents') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                📌 Registered Events
              </Link>
            </li>

            {/* 📢 New Announcements Section */}
            <li className="nav-item mb-2">
              <Link
                to="/student/announcements"
                className={`nav-link px-3 py-2 fw-semibold rounded ${
                  isActive('/student/announcements') ? 'active-link' : 'text-dark hover-effect'
                }`}
              >
                📢 Announcements
              </Link>
            </li>

            <li className="nav-item mt-4 px-3">
              <button
                onClick={handleLogout}
                className="btn btn-outline-danger w-100"
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 py-4 px-5">
          <div className="bg-white p-4 shadow-sm rounded">
            <Routes>
              <Route path="/" element={<Navigate to="home" />} />
              <Route path="home" element={<StudentHome />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="allcourses" element={<AllCourses />} />
              <Route path="enrolledcourses" element={<EnrolledCourses />} />
              <Route path="placements" element={<PlacementDashboard />} />
              <Route path="placementapplications" element={<PlacementApplication />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="events" element={<Events />} />
              <Route path="registeredevents" element={<RegisteredEvents />} />
              <Route path="announcements" element={<Announcements />} /> {/* NEW ROUTE */}
            </Routes>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .hover-effect:hover {
          background-color: #e3f2fd !important;
          color: #0d6efd !important;
        }
        .active-link {
          background-color: #0d6efd !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default StudentDashboard;
