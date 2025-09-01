import React from 'react';
import { Link, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

import Home from './Home';
import Profile from './Profile';
import CourseMaterial from './CourseMaterial';
import Announcements from './Announcements';
import EventSection from './EventSection';
import RegisteredStudents from './RegisteredStudents';

// New Components
import PlacementOpportunities from './PlacementOpportunities';
import PlacementApplications from './PlacementApplications';

const StaffDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <div className="container-fluid min-vh-100 bg-light">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-white border-end shadow-sm px-0">
          <div className="bg-primary text-white text-center py-3">
            <h5 className="mb-0">📘 Staff Portal</h5>
          </div>
          <ul className="nav flex-column p-3">
            <li className="nav-item mb-2">
              <Link
                to="/staff/home"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/home") ? "active-link" : "text-dark hover-effect"}`}
              >
                🏠 Home
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/profile"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/profile") ? "active-link" : "text-dark hover-effect"}`}
              >
                👤 Profile
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/courses"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/courses") ? "active-link" : "text-dark hover-effect"}`}
              >
                📚 Course Material
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/announcements"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/announcements") ? "active-link" : "text-dark hover-effect"}`}
              >
                📢 Announcements
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/events"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/events") ? "active-link" : "text-dark hover-effect"}`}
              >
                🎉 Events
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/registered-students"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/registered-students") ? "active-link" : "text-dark hover-effect"}`}
              >
                👥 Registered Students
              </Link>
            </li>

            {/* Placement Sections */}
            <li className="nav-item mb-2">
              <Link
                to="/staff/placement-opportunities"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/placement-opportunities") ? "active-link" : "text-dark hover-effect"}`}
              >
                💼 Placement Opportunities
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/staff/placement-applications"
                className={`nav-link px-3 py-2 fw-semibold rounded ${isActive("/staff/placement-applications") ? "active-link" : "text-dark hover-effect"}`}
              >
                📝 Placement Applications
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
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses" element={<CourseMaterial />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="events" element={<EventSection />} />
              <Route path="registered-students" element={<RegisteredStudents />} />

              {/* Placement Routes */}
              <Route path="placement-opportunities" element={<PlacementOpportunities />} />
              <Route path="placement-applications" element={<PlacementApplications />} />
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

export default StaffDashboard;
