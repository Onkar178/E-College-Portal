// import React, { useState } from 'react';
// import '../RegisterForm.css';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
  
//     uname: '',
//     email: '',
//     phone_no: '',
//     password: '',
//     confirmPassword: '', 
//     role: {
//         rid: 1
//    }

//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

    
//   //   }

//     const handleSubmit = async (e) => {
//   e.preventDefault();

  

//   if (formData.password !== formData.confirmPassword) {
//     alert("Passwords do not match!");
    
//   }

//   // const finalData = {
//   //   uname: formData.uname,
//   //   email: formData.email,
//   //   phone_no: formData.phone_no,
//   //   password: formData.password,
//   //    rid: '1'
//   // };

//   try {
//     console.log("req starts");
//     const response = await fetch("http://localhost:8080/user/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(finalData),
//     });
//  console.log("res starts");
//     const result = await response.json();

//     if (response.ok) {
//       alert("Registration successful!");
//     } else {
//       alert("Error: " + result);
//     }
//   } catch (error) {
//     alert("Something went wrong: " + error.message);
//   }
// };

//     const finalData = {
     
//       uname: formData.uname,
//       email: formData.email,
//       phone_no: formData.phone_no,
//       password: formData.password,
//        role: {
//         rid: 1
//    }
//     };

//     console.log('Registration Data:', finalData);
  

//   return (
//     <div className="register-container" >
//       <div className="animated-background-text">E-COLLEGE PORTAL</div>
//       <form onSubmit={handleSubmit} className="register-form shadow-lg rounded">
//         <h3 className="text-center text-white mb-4">Register</h3>
        
//         <div className="mb-3">
//           <label className="form-label text-white">User Name</label>
//           <input type="text" name="uname" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label text-white">Email</label>
//           <input type="email" name="email" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label text-white">Phone Number</label>
//           <input type="text" name="phone_no" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label text-white">Password</label>
//           <input type="password" name="password" className="form-control" onChange={handleChange} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label text-white">Confirm Password</label>
//           <input type="password" name="confirmPassword" className="form-control" onChange={handleChange} required />
//         </div>
//         <button type="submit" className="btn btn-primary w-100 fw-bold">Register</button>
//         <p className="text-center mt-3 text-white">
//           Already registered? <a href="/login" className="text-warning">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;





// import React, { useState } from 'react';
// import '../RegisterForm.css';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     uname: '',
//     email: '',
//     phone_no: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // 🔑 Backend expects `rid` as a flat field, not nested in `role`
//     const finalData = {
//       uname: formData.uname,
//       email: formData.email,
//       phone_no: formData.phone_no,
//       password: formData.password,
//       rid: 1 // ✅ This is correct (or use 3 for "student" if that's the role)
//     };

//     console.log("Registration Data:", finalData);

//     try {
//       const response = await fetch("http://localhost:8080/user/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalData),
//       });

//       const result = await response.text();

//       if (response.ok) {
//         alert("Registration successful!");
//         console.log("Saved user:", result);
//         // Optional: clear form or redirect to login
//       } else {
//         alert("Error: " + (result.message || JSON.stringify(result)));
//       }
//     } catch (error) {
//       alert("Something went wrong: " + error.message);
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="animated-background-text">E-COLLEGE PORTAL</div>
//       <form onSubmit={handleSubmit} className="register-form shadow-lg rounded">
//         <h3 className="text-center text-white mb-4">Register</h3>

//         <div className="mb-3">
//           <label className="form-label text-white">User Name</label>
//           <input
//             type="text"
//             name="uname"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Phone Number</label>
//           <input
//             type="text"
//             name="phone_no"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100 fw-bold">
//           Register
//         </button>

//         <p className="text-center mt-3 text-white">
//           Already registered? <a href="/login" className="text-warning">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;






// import React, { useState } from 'react';
// import '../RegisterForm.css';
// import axios from '../api/axiosConfig'; // ✅ import your Axios instance

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     uname: '',
//     email: '',
//     phone_no: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // ✅ Prepare request data
//     const finalData = {
//       uname: formData.uname,
//       email: formData.email,
//       phone_no: formData.phone_no,
//       password: formData.password,
//       rid: 1 // 👈 Student role (1 = student, 2 = staff, 3 = admin)
//     };

//     try {
//       const response = await axios.post('/user/register', finalData);
//       alert("Registration successful!");
//       console.log("Saved user:", response.data);
//     } catch (error) {
//       alert("Registration failed: " + (error.response?.data || error.message));
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="animated-background-text">E-COLLEGE PORTAL</div>
//       <form onSubmit={handleSubmit} className="register-form shadow-lg rounded">
//         <h3 className="text-center text-white mb-4">Register</h3>

//         <div className="mb-3">
//           <label className="form-label text-white">User Name</label>
//           <input
//             type="text"
//             name="uname"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Phone Number</label>
//           <input
//             type="text"
//             name="phone_no"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label text-white">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             className="form-control"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary w-100 fw-bold">
//           Register
//         </button>

//         <p className="text-center mt-3 text-white">
//           Already registered? <a href="/" className="text-warning">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;



import React, { useState } from 'react';
import '../RegisterForm.css';
import axios from '../api/axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    phone_no: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validateField = (name, value) => {
    let error = "";

    if (name === "uname") {
      const nameRegex = /^[A-Z][a-zA-Z\s]*$/; // Must start with uppercase
      if (!value.trim()) error = "User Name is required!";
      else if (!nameRegex.test(value)) error = "Name must start with a capital letter and contain only letters!";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) error = "Email is required!";
      else if (!emailRegex.test(value)) error = "Please enter a valid email address!";
    }

    if (name === "phone_no") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!value.trim()) error = "Phone number is required!";
      else if (!phoneRegex.test(value)) error = "Please enter a valid 10-digit phone number!";
    }

    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/; // Letters + numbers + special chars
      if (!value) error = "Password is required!";
      else if (value.length < 6) error = "Password must be at least 6 characters long!";
      else if (!passwordRegex.test(value)) error = "Password must contain at least one letter, one number, and can include special characters!";
    }

    if (name === "confirmPassword") {
      if (!value) error = "Please confirm your password!";
      else if (value !== formData.password) error = "Passwords do not match!";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // ✅ Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation check
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));
    if (Object.values(errors).some((err) => err)) return;

    const finalData = {
      uname: formData.uname,
      email: formData.email,
      phone_no: formData.phone_no,
      password: formData.password,
      rid: 1
    };

    try {
      const response = await axios.post('/user/register', finalData);

      toast.success("🎉 Registration successful!", {
        position: "top-center",
        autoClose: 3000
      });

      setFormData({
        uname: '',
        email: '',
        phone_no: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
      console.log("Saved user:", response.data);

    } catch (error) {
      toast.error("❌ Registration failed: " + (error.response?.data || error.message), {
        position: "top-center",
        autoClose: 3000
      });
    }
  };

  return (
    <div className="register-container">
      <div className="animated-background-text">E-COLLEGE PORTAL</div>

      <form onSubmit={handleSubmit} className="register-form shadow-lg rounded">
        <h3 className="text-center text-white mb-4">Register</h3>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label text-white">User Name</label>
          <input
            type="text"
            name="uname"
            className="form-control"
            value={formData.uname}
            onChange={handleChange}
            required
          />
          {errors.uname && <div className="text-danger">{errors.uname}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label text-white">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label text-white">Phone Number</label>
          <input
            type="text"
            name="phone_no"
            className="form-control"
            value={formData.phone_no}
            onChange={handleChange}
            required
          />
          {errors.phone_no && <div className="text-danger">{errors.phone_no}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label text-white">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold">
          Register
        </button>

        <p className="text-center mt-3 text-white">
          Already registered? <a href="/login" className="text-warning">Login</a>
        </p>
      </form>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;