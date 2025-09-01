
// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-4 mt-auto">
//       <div className="container">
//         <div className="row">
//           {/* About Section */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold">E-College Portal</h5>
//             <p className="small">
//               Your all-in-one platform for managing courses, events, and student resources.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="/" className="text-light text-decoration-none">Home</a></li>
//               <li><a href="/register" className="text-light text-decoration-none">Register</a></li>
//               <li><a href="/login" className="text-light text-decoration-none">Login</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold">Contact</h5>
//             <p className="small mb-1"><i className="bi bi-envelope"></i> support@ecollege.com</p>
//             <p className="small mb-0"><i className="bi bi-telephone"></i> +91 98765 43210</p>
//           </div>
//         </div>

//         <hr className="border-light" />
//         <div className="text-center small">
//           &copy; {new Date().getFullYear()} E-College Portal. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-4 mt-auto">
//       <div className="container">
//         <div className="row">
//           {/* About Section */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold fs-5">E-College Portal</h5>
//             <p className="small fs-6">
//               Your all-in-one platform for managing courses, events, and student resources.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold fs-5">Quick Links</h5>
//             <ul className="list-unstyled fs-6">
//               <li className="mb-2">
//                 <i className="bi bi-house-door me-2"></i>
//                 <a href="/" className="text-light text-decoration-none">Home</a>
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-person-plus me-2"></i>
//                 <a href="/register" className="text-light text-decoration-none">Register</a>
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-box-arrow-in-right me-2"></i>
//                 <a href="/login" className="text-light text-decoration-none">Login</a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="col-md-4 mb-3">
//             <h5 className="fw-bold fs-5">Contact</h5>
//             <p className="fs-6 mb-2">
//               <i className="bi bi-envelope me-2"></i> support@ecollege.com
//             </p>
//             <p className="fs-6 mb-0">
//               <i className="bi bi-telephone me-2"></i> +91 98765 43210
//             </p>
//           </div>
//         </div>

//         <hr className="border-light" />
//         <div className="text-center small">
//           &copy; {new Date().getFullYear()} E-College Portal. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold fs-4">E-College Portal</h5>
            <p className="fs-5">
              Your all-in-one platform for managing courses, events, and student resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold fs-4">Quick Links</h5>
            <ul className="list-unstyled fs-4">
              <li className="mb-3">
                <i className="bi bi-house-door me-2"></i>
                <a href="/" className="text-light text-decoration-none">Home</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-person-plus me-2"></i>
                <a href="/register" className="text-light text-decoration-none">Register</a>
              </li>
              <li className="mb-3">
                <i className="bi bi-box-arrow-in-right me-2"></i>
                <a href="/login" className="text-light text-decoration-none">Login</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold fs-4">Contact</h5>
            <p className="fs-4 mb-3">
              <i className="bi bi-envelope me-2"></i> support@ecollege.com
            </p>
            <p className="fs-4 mb-0">
              <i className="bi bi-telephone me-2"></i> +91 6387096974
            </p>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center fs-6">
          &copy; {new Date().getFullYear()} E-College Portal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

