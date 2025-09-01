

// // src/pages/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import collegeImg from '../assets/college-pic1.jpg'; // adjust path

// const Home = () => {
//   return (
//     <div className="bg-light">
//       {/* Hero Section */}
//       <section className="py-5 bg-dark text-light">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1 className="fw-bold display-4">Welcome to E-College Portal</h1>
//               <p className="lead">
//                 Your all-in-one digital gateway to smarter education.  
//                 Access courses, connect with faculty, and stay updated on events.
//               </p>
//               <div className="d-flex gap-3 mt-4">
//                 <Link to="/register" className="btn btn-primary btn-lg rounded-pill">
//                   <i className="bi bi-person-plus me-2"></i>Register
//                 </Link>
//                 <Link to="/login" className="btn btn-outline-light btn-lg rounded-pill">
//                   <i className="bi bi-box-arrow-in-right me-2"></i>Login
//                 </Link>
//               </div>
//             </Col>
//             <Col md={6}>
//               <img
//                 src={collegeImg}
//                 alt="Students"
//                 className="img-fluid rounded shadow"
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Features Section */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center fw-bold mb-5">Explore Our Features</h2>
//           <Row className="g-4">
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-book display-3 text-primary mb-3"></i>
//                 <h5 className="fw-bold">Courses</h5>
//                 <p>Browse and enroll in a variety of academic courses with ease.</p>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-calendar-event display-3 text-success mb-3"></i>
//                 <h5 className="fw-bold">Events</h5>
//                 <p>Stay informed about upcoming college events and activities.</p>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-person-workspace display-3 text-warning mb-3"></i>
//                 <h5 className="fw-bold">Student Dashboard</h5>
//                 <p>Manage your profile, feedback, placements, and more from one place.</p>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Call to Action */}
//       <section className="py-5 bg-primary text-light text-center">
//         <Container>
//           <h2 className="fw-bold mb-3">Join E-College Today!</h2>
//           <p className="lead mb-4">
//             Experience seamless learning and campus management at your fingertips.
//           </p>
//           <Link to="/register" className="btn btn-light btn-lg rounded-pill">
//             <i className="bi bi-person-plus me-2"></i>Get Started
//           </Link>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;



//src/pages/Home.js

// original code

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import collegeImg from '../assets/college-pic1.jpg'; // adjust path


const Home = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="hero-section py-5 bg-dark text-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold display-4">Welcome to E-College Portal</h1>
              <p className="lead">
                Your all-in-one digital gateway to smarter education.  
                Access courses, connect with faculty, and stay updated on events.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Link to="/register" className="btn btn-primary btn-lg rounded-pill">
                  <i className="bi bi-person-plus me-2"></i>Register
                </Link>
                <Link to="/login" className="btn btn-outline-light btn-lg rounded-pill">
                  <i className="bi bi-box-arrow-in-right me-2"></i>Login
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={collegeImg}
                alt="Students"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Explore Our Features</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow border-0 text-center p-4">
                <i className="bi bi-book display-3 text-primary mb-3"></i>
                <h5 className="fw-bold">Courses</h5>
                <p>Browse and enroll in a variety of academic courses with ease.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow border-0 text-center p-4">
                <i className="bi bi-calendar-event display-3 text-success mb-3"></i>
                <h5 className="fw-bold">Events</h5>
                <p>Stay informed about upcoming college events and activities.</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 shadow border-0 text-center p-4">
                <i className="bi bi-person-workspace display-3 text-warning mb-3"></i>
                <h5 className="fw-bold">Student Dashboard</h5>
                <p>Manage your profile, feedback, placements, and more from one place.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-light text-center">
        <Container>
          <h2 className="fw-bold mb-3">Join E-College Today!</h2>
          <p className="lead mb-4">
            Experience seamless learning and campus management at your fingertips.
          </p>
          <Link to="/register" className="btn btn-light btn-lg rounded-pill">
            <i className="bi bi-person-plus me-2"></i>Get Started
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Home;


// import React, { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import heroImg1 from '../assets/college-pic1.jpg';
// import heroImg2 from '../assets/college-pic2.jpg';
// import heroImg3 from '../assets/college-pic3.jpg';

// const Home = () => {
//   const scrollRef = useRef(null);

//   // Auto scroll when page loads
//   useEffect(() => {
//     const container = scrollRef.current;
//     let scrollAmount = 0;
//     const scrollStep = 1; // pixels per step
//     const scrollInterval = setInterval(() => {
//       if (container) {
//         container.scrollLeft += scrollStep;
//         scrollAmount += scrollStep;
//         if (scrollAmount >= container.scrollWidth / 2) {
//           scrollAmount = 0;
//           container.scrollLeft = 0;
//         }
//       }
//     }, 20); // speed

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="bg-light">
//       {/* Hero Section */}
//       <section className="hero-section py-5 bg-dark text-light">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1 className="fw-bold display-4">Welcome to E-College Portal</h1>
//               <p className="lead">
//                 Your all-in-one digital gateway to smarter education.
//                 Access courses, connect with faculty, and stay updated on events.
//               </p>
//               <div className="d-flex gap-3 mt-4">
//                 <Link to="/register" className="btn btn-primary btn-lg rounded-pill">
//                   <i className="bi bi-person-plus me-2"></i>Register
//                 </Link>
//                 <Link to="/login" className="btn btn-outline-light btn-lg rounded-pill">
//                   <i className="bi bi-box-arrow-in-right me-2"></i>Login
//                 </Link>
//               </div>
//             </Col>

//             {/* Auto-Scrolling Images */}
//             <Col md={6}>
//               <div className="hero-scroll-container" ref={scrollRef}>
//                 <img src={heroImg1} alt="Campus view" />
//                 <img src={heroImg2} alt="Students" />
//                 <img src={heroImg3} alt="Library" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Features Section */}
//       <section className="py-5">
//         <Container>
//           <h2 className="text-center fw-bold mb-5">Explore Our Features</h2>
//           <Row className="g-4">
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-book display-3 text-primary mb-3"></i>
//                 <h5 className="fw-bold">Courses</h5>
//                 <p>Browse and enroll in a variety of academic courses with ease.</p>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-calendar-event display-3 text-success mb-3"></i>
//                 <h5 className="fw-bold">Events</h5>
//                 <p>Stay informed about upcoming college events and activities.</p>
//               </Card>
//             </Col>
//             <Col md={4}>
//               <Card className="h-100 shadow border-0 text-center p-4">
//                 <i className="bi bi-person-workspace display-3 text-warning mb-3"></i>
//                 <h5 className="fw-bold">Student Dashboard</h5>
//                 <p>Manage your profile, feedback, placements, and more from one place.</p>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Call to Action */}
//       <section className="py-5 bg-primary text-light text-center">
//         <Container>
//           <h2 className="fw-bold mb-3">Join E-College Today!</h2>
//           <p className="lead mb-4">
//             Experience seamless learning and campus management at your fingertips.
//           </p>
//           <Link to="/register" className="btn btn-light btn-lg rounded-pill">
//             <i className="bi bi-person-plus me-2"></i>Get Started
//           </Link>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Home;

