import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice"; // adjust path to your authSlice
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear Redux state
    dispatch(logout());

    // Clear stored authentication/session data
    localStorage.removeItem("user");
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-light border-end p-3">
          <h4 className="mb-4 text-primary">Admin Dashboard</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/admin/courses" className="nav-link text-dark">
                📚 Courses
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/admin/users" className="nav-link text-dark">
                👥 Users
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link to="/admin/feedback" className="nav-link text-dark">
                📝 Feedback
              </Link>
            </li>

            {/* Logout Button */}
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-danger w-100"
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h2 className="mb-4 text-primary">Welcome to Admin Dashboard</h2>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
