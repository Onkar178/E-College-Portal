// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Navbar.css'; // Ensure this file includes your custom styles
// import logo from '../assets/college-logo.png'; // Adjust path if needed

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4 py-3 shadow">
//       <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
//         <img
//           src={logo}
//           alt="E-College Logo"
//           style={{ height: '40px', width: 'auto' }}
//         />
//         <span className="fw-bold fs-4 text-white">E-College Portal</span>
//       </Link>

//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarNav"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ms-auto align-items-center gap-3">
//           <li className="nav-item">
//             <Link className="nav-link nav-item-hover fw-semibold text-white" to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link nav-item-hover fw-semibold text-white" to="/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link nav-item-hover fw-semibold text-white" to="/courses">Courses</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link nav-item-hover fw-semibold text-white" to="/contact">Contact</Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               className="btn btn-light fw-semibold px-4 py-2 rounded-pill login-btn"
//               to="/login"
//             >
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import logo from '../assets/college-logo.png';
import HomeFeatures from './HomeFeatures';
import CourseFeatures from './CourseFeatures';
import ContactCard from './ContactCard';

const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hideTimeout = useRef(null);

  // 🖱 Detect scroll & adjust body padding so hero isn't hidden
  useEffect(() => {
    const navbarEl = document.querySelector('.custom-navbar');
    const navbarHeight = navbarEl?.offsetHeight || 0;

    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-section')?.offsetHeight || 0;

      if (window.scrollY > heroHeight - 50) {
        setIsScrolled(true);
        document.body.style.paddingTop = `${navbarHeight}px`; // space so content doesn't jump
      } else {
        setIsScrolled(false);
        document.body.style.paddingTop = '0px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.paddingTop = '0px'; // cleanup
    };
  }, []);

  // Hover handlers
  const handleMouseEnterHome = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowFeatures(true);
    setShowCourses(false);
    setShowAbout(false);
    setShowContact(false);
  };
  const handleMouseLeaveHome = () => {
    hideTimeout.current = setTimeout(() => setShowFeatures(false), 400);
  };

  const handleMouseEnterAbout = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowAbout(true);
    setShowFeatures(false);
    setShowCourses(false);
    setShowContact(false);
  };
  const handleMouseLeaveAbout = () => setShowAbout(false);

  const handleMouseEnterCourses = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowCourses(true);
    setShowFeatures(false);
    setShowAbout(false);
    setShowContact(false);
  };
  const handleMouseLeaveCourses = () => {
    hideTimeout.current = setTimeout(() => setShowCourses(false), 400);
  };

  const handleMouseEnterContact = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowContact(true);
    setShowFeatures(false);
    setShowAbout(false);
    setShowCourses(false);
  };
  const handleMouseLeaveContact = () => {
    hideTimeout.current = setTimeout(() => setShowContact(false), 300);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark custom-navbar px-4 py-3 shadow w-100 
        ${isScrolled ? 'position-fixed navbar-visible' : 'position-absolute navbar-hidden'}`}
      style={{ top: 0, left: 0, zIndex: 2000, transition: 'all 0.3s ease' }}
    >
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src={logo} alt="E-College Logo" style={{ height: '40px', width: 'auto' }} />
        <span className="fw-bold fs-4 text-white">E-College Portal</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center gap-3">
          <li
            className="nav-item position-relative"
            onMouseEnter={handleMouseEnterHome}
            onMouseLeave={handleMouseLeaveHome}
          >
            <button className="nav-link fw-semibold text-white btn btn-link">Home</button>
            {showFeatures && (
              <div onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
                <HomeFeatures />
              </div>
            )}
          </li>
          <li
            className="nav-item position-relative"
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            <button className="nav-link fw-semibold btn btn-link text-white fs-8">About</button>
            {showAbout && (
              <div
                className="card shadow position-absolute mt-2 animate-dropdown"
                style={{
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '350px',
                  zIndex: 1050,
                  borderRadius: '12px',
                }}
              >
                <div
                  className="card-header text-dark fw-bold"
                  style={{
                    backgroundColor: '#87CEFA',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                >
                  About E-College Portal
                </div>
                <div className="card-body">
                  <p className="mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                    The E-College Portal is your one-stop digital gateway for managing academic life.
                    Students can access courses, register for events, track placements, and connect with faculty.
                    Staff and administrators can manage academic records, schedules, and campus activities.
                    Designed with ease of use in mind, the portal brings everything you need for smarter,
                    faster, and more connected learning — all in one place.
                  </p>
                </div>
              </div>
            )}
          </li>
          <li
            className="nav-item position-relative"
            onMouseEnter={handleMouseEnterCourses}
            onMouseLeave={handleMouseLeaveCourses}
          >
            <button className="nav-link fw-semibold text-white btn btn-link">Courses</button>
            {showCourses && (
              <div onMouseEnter={handleMouseEnterCourses} onMouseLeave={handleMouseLeaveCourses}>
                <CourseFeatures />
              </div>
            )}
          </li>
          <li
            className="nav-item position-relative"
            onMouseEnter={handleMouseEnterContact}
            onMouseLeave={handleMouseLeaveContact}
          >
            <button className="nav-link fw-semibold btn btn-link text-white fs-8">Contact</button>
            {showContact && <ContactCard />}
          </li>
          <li className="nav-item">
            <Link className="btn btn-light fw-semibold px-4 py-2 rounded-pill login-btn" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
