// // src/components/LoginForm.js
// import React, { useState, useEffect } from 'react';
// import '../LoginForm.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/authSlice';
// // import { loginUser } from '@/redux/authSlice';

// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();
//   const { user, isLoading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   // Redirect based on the logged-in user's role
//   useEffect(() => {
//     if (user) {
//       if (user.rid === 1) {
//         navigate('/student');
//       } else if (user.id === 2) {
//         navigate('/staff');
//       } else if (user.rid === 3) {
//         navigate('/admin');
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form shadow-lg rounded p-4">
//         <h3 className="text-center mb-4 text-primary">Login</h3>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             required
//             value={formData.email}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             required
//             value={formData.password}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <p className="text-center mt-3">
//           Not registered?{' '}
//           <a href="/register" className="text-decoration-none text-success">
//             Create account
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState, useEffect } from 'react';
// import '../LoginForm.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/authSlice';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const dispatch = useDispatch();
//   const { user, isLoading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   useEffect(() => {
//     if (user) {
//       // ✅ Navigate based on roleId (rid)
//       if (user.rid === 1) {
//         navigate('/student');
//       } else if (user.rid === 2) {
//         navigate('/staff');
//       } else if (user.rid === 3) {
//         navigate('/admin');
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form shadow-lg rounded p-4">
//         <h3 className="text-center mb-4 text-primary">Login</h3>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             value={formData.email}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             value={formData.password}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={isLoading}>
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <p className="text-center mt-3">
//           Not registered?{' '}
//           <a href="/register" className="text-decoration-none text-success">
//             Create account
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// src/components/LoginForm.js

// import React, { useState, useEffect } from "react";
// import "../LoginForm.css";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/authSlice";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const { user, isLoading, error } = useSelector((state) => state.auth);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(formData));
//   };

//   // 🔁 Redirect after login based on role ID
//   useEffect(() => {
//     if (user) {
//       console.log("Redirecting user with rid:", user.rid);
//       if (user.rid === 1) {
//         navigate("/student");
//       } else if (user.rid === 2) {
//         navigate("/staff");
//       } else if (user.rid === 3) {
//         navigate("/admin");
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div className="login-container">
//       <form
//         onSubmit={handleSubmit}
//         className="login-form shadow-lg rounded p-4"
//       >
//         <h3 className="text-center mb-4 text-primary">Login</h3>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             value={formData.email}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             value={formData.password}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary w-100 fw-bold"
//           disabled={isLoading}
//         >
//           {isLoading ? "Logging in..." : "Login"}
//         </button>

//         <p className="text-center mt-3">
//           Not registered?{" "}
//           <a href="/register" className="text-decoration-none text-success">
//             Create account
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState, useEffect } from 'react';
import '../LoginForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // ✅ Field validation
  const validateField = (name, value) => {
    let err = '';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) err = 'Email is required!';
      else if (!emailRegex.test(value)) err = 'Please enter a valid email!';
    }

    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/; 
      if (!value.trim()) err = 'Password is required!';
      else if (value.length < 6) err = 'Password must be at least 6 characters!';
      else if (!passwordRegex.test(value))
        err = 'Password must contain at least one letter, one number, and can include special characters!';
    }

    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    if (Object.values(errors).some((err) => err) || Object.values(formData).some((v) => !v.trim())) {
      return;
    }

    dispatch(loginUser(formData));
  };

  // Handle login success or error
  useEffect(() => {
    if (user) {
      toast.success('🎉 Login successful!', { position: 'top-center', autoClose: 3000 });

      localStorage.setItem('uid', user.uid);
      localStorage.setItem('email', user.email);
      localStorage.setItem('rid', user.rid);

      console.log('Redirecting user with rid:', user.rid);

      if (user.rid === 1) navigate('/student');
      else if (user.rid === 2) navigate('/staff');
      else if (user.rid === 3) navigate('/admin');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(`❌ Login failed: ${error}`, { position: 'top-center', autoClose: 3000 });
    }
  }, [error]);

  return (
    <div className="login-container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login-form shadow-lg rounded p-4">
        <h3 className="text-center mb-4 text-primary">Login</h3>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            value={formData.password}
            required
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 fw-bold"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center mt-3">
          Not registered?{' '}
          <a href="/register" className="text-decoration-none text-success">
            Create account
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
