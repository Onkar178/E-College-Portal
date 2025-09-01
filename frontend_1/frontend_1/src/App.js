import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/HomePage';
import StudentPage from './components/StudentPage';
import AdminDashboard from './components/AdminDashboard/Admindashboard.js';
import StaffDashboard from './components/StaffDashboard/StaffDashboard';
import Navbar from './components/Navbar';

// 🔒 Private route wrapper
const PrivateRoute = ({ children, role }) => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" />;

  // Role-based access control
  if (role && user.rid !== role) {
    if (user.rid === 1) return <Navigate to="/student" />;
    if (user.rid === 2) return <Navigate to="/staff" />;
    if (user.rid === 3) return <Navigate to="/admin" />;
  }

  return children;
};

const App = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    // <Router>
    //   {!user && <Navbar />}
    //   <Routes>
    //     {/* Public Routes */}
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="/register" element={<RegisterForm />} />

    //     {/* Student Dashboard */}
    //     <Route
    //       path="/student/*"
    //       element={
    //         <PrivateRoute role={1}>
    //           <StudentPage />
    //         </PrivateRoute>
    //       }
    //     />

    //     {/* Staff Dashboard */}
    //     <Route
    //       path="/staff/*"
    //       element={
    //         <PrivateRoute role={2}>
    //           <StaffDashboard />
    //         </PrivateRoute>
    //       }
    //     />

    //     {/* Admin Dashboard */}
    //     <Route
    //       path="/admin/*"
    //       element={
    //         <PrivateRoute role={3}>
    //           <AdminDashboard />
    //           {/* <h>Hello</h> */}
    //           {/* <StaffDashboard /> */}
    //         </PrivateRoute>
    //       }
    //     />

    //     {/* Fallback route */}
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </Router>
    <>
    
    <Navbar/>
    <Outlet/>
    </>
  );
};

export default App;
