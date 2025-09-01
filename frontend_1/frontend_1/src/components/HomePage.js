
// import React from 'react';
// import '../HomePage.css';
// import collegeGirls from '../assets/college-pic1.jpg'; // adjust the path as per your folder
// import Footer from './Footer';

// const HomePage = () => {
//   return (
//     <div className="home-container">
//       <div className="home-hero row align-items-center">
//         <div className="col-md-6 text-section">
//           <h1 className="fw-bold display-5">Welcome to E-College Portal</h1>
//           <p className="lead">
//             Your digital gateway to smart education. Easily manage your courses,
//             connect with staff, and explore learning – all in one place.
//           </p>
//           <a href="/register" className="btn btn-outline-light btn-lg mt-3">
//             Get Started
//           </a>
//         </div>
//         <div className="col-md-6 image-section">
//           <img
//             src={collegeGirls}
//             alt="Students going to college"
//             className="img-fluid rounded shadow animated-img"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




import React from 'react';
import '../HomePage.css';

import img1 from '../assets/college-pic.jpg';
import img2 from '../assets/college-pic2.jpg';
import img3 from '../assets/college-pic3.jpg';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-hero row align-items-center">
          {/* Left text section */}
          <div className="col-md-6 text-section hero-text">
            <h1 className="fw-bold display-5">Welcome to E-College Portal</h1>
            <p className="lead">
              Your digital gateway to smart education. Easily manage your courses,
              connect with staff, and explore learning – all in one place.
            </p>
            <a href="/register" className="btn btn-outline-light btn-lg mt-3">
              Get Started
            </a>
          </div>

          {/* Right static images section */}
          <div className="col-md-6 image-section">
            <div className="image-grid">
              <div className="top-row">
                <img src={img1} alt="Campus" />
                <img src={img2} alt="Students" />
              </div>
              <div className="bottom-row">
                <img src={img3} alt="Library" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;


