
// // src/components/FeedbackForm.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     sid: '',
//     feedback_type: '',
//     rating: '',
//     comments: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Create payload object matching backend structure
//     const payload = {
//       student: {
//         sid: formData.sid
//       },
//       feedback_type: formData.feedback_type,
//       rating: parseInt(formData.rating),
//       comments: formData.comments
//     };

//     try {
//       await axios.post('http://localhost:8081/api/feedback', payload);
//       setMessage('Feedback submitted successfully!');
//       setFormData({ sid: '', feedback_type: '', rating: '', comments: '' });
//     } catch (error) {
//       setMessage('Failed to submit feedback. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Submit Feedback</h2>
//       {message && <div className="alert alert-info">{message}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="sid" className="form-label">Student ID</label>
//           <input
//             type="text"
//             className="form-control"
//             id="sid"
//             name="sid"
//             value={formData.sid}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="feedback_type" className="form-label">Feedback Type</label>
//           <input
//             type="text"
//             className="form-control"
//             id="feedback_type"
//             name="feedback_type"
//             value={formData.feedback_type}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="rating" className="form-label">Rating (1-5)</label>
//           <input
//             type="number"
//             className="form-control"
//             id="rating"
//             name="rating"
//             min="1"
//             max="5"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="comments" className="form-label">Comments</label>
//           <textarea
//             className="form-control"
//             id="comments"
//             name="comments"
//             rows="3"
//             value={formData.comments}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary">Submit Feedback</button>
//       </form>
//     </div>
//   );
// };

// export default Feedback;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     sid: '',
//     feedback_type: '',
//     rating: '',
//     comments: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Create payload object matching backend structure
//     const payload = {
//       student: {
//         sid: formData.sid
//       },
//       feedback_type: formData.feedback_type,
//       rating: parseInt(formData.rating),
//       comments: formData.comments
//     };

//     try {
//       await axios.post('http://localhost:8081/api/feedback', payload);
//       setMessage('Feedback submitted successfully!');
//       setFormData({ sid: '', feedback_type: '', rating: '', comments: '' });
//     } catch (error) {
//       setMessage('Failed to submit feedback. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <div
//       className="container mt-4"
//       style={{
//         backgroundColor: 'black',
//         padding: '20px',
//         borderRadius: '8px',
//         color: 'white',
//         maxWidth: '600px'
//       }}
//     >
//       <h2 style={{ color: 'yellowgreen' }}>Submit Feedback</h2>
//       {message && (
//         <div
//           className="alert alert-info"
//           style={{ backgroundColor: 'yellowgreen', color: 'black' }}
//         >
//           {message}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="sid" className="form-label" style={{ color: 'white' }}>
//             Student ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="sid"
//             name="sid"
//             value={formData.sid}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="feedback_type" className="form-label" style={{ color: 'white' }}>
//             Feedback Type
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="feedback_type"
//             name="feedback_type"
//             value={formData.feedback_type}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="rating" className="form-label" style={{ color: 'white' }}>
//             Rating (1-5)
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="rating"
//             name="rating"
//             min="1"
//             max="5"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="comments" className="form-label" style={{ color: 'white' }}>
//             Comments
//           </label>
//           <textarea
//             className="form-control"
//             id="comments"
//             name="comments"
//             rows="3"
//             value={formData.comments}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="btn"
//           style={{
//             backgroundColor: 'yellowgreen',
//             color: 'black',
//             border: 'none',
//             fontWeight: 'bold'
//           }}
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Feedback;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     sid: '',
//     feedback_type: '',
//     rating: '',
//     comments: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       student: {
//         sid: formData.sid
//       },
//       feedback_type: formData.feedback_type,
//       rating: parseInt(formData.rating),
//       comments: formData.comments
//     };

//     try {
//       await axios.post('http://localhost:8081/api/feedback', payload);
//       setMessage('Feedback submitted successfully!');
//       setFormData({ sid: '', feedback_type: '', rating: '', comments: '' });
//     } catch (error) {
//       setMessage('Failed to submit feedback. Please try again.');
//       console.error(error);
//     }
//   };

//   return (
//     <div
//       className="container mt-4"
//       style={{
//         background: 'linear-gradient(135deg, #001f3f, #000814)', // deep navy blue gradient
//         padding: '20px',
//         borderRadius: '8px',
//         color: 'white',
//         maxWidth: '600px',
//         minHeight: '100vh',
//       }}
//     >
//       <h2 style={{ color: 'yellowgreen' }}>Submit Feedback</h2>
//       {message && (
//         <div
//           className="alert alert-info"
//           style={{ backgroundColor: 'yellowgreen', color: 'black' }}
//         >
//           {message}
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="sid" className="form-label" style={{ color: 'white' }}>
//             Student ID
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="sid"
//             name="sid"
//             value={formData.sid}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="feedback_type" className="form-label" style={{ color: 'white' }}>
//             Feedback Type
//           </label>
//           <select
//             id="feedback_type"
//             name="feedback_type"
//             className="form-select"
//             value={formData.feedback_type}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>-- Select Feedback Type --</option>
//             <option value="Courses">Courses</option>
//             <option value="Faculty">Faculty</option>
//             <option value="Events">Events</option>
//           </select>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="rating" className="form-label" style={{ color: 'white' }}>
//             Rating (1-5)
//           </label>
//           <select
//             id="rating"
//             name="rating"
//             className="form-select"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>-- Select Rating --</option>
//             {[1, 2, 3, 4, 5].map(num => (
//               <option key={num} value={num}>{num}</option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-3">
//           <label htmlFor="comments" className="form-label" style={{ color: 'white' }}>
//             Comments
//           </label>
//           <textarea
//             className="form-control"
//             id="comments"
//             name="comments"
//             rows="3"
//             value={formData.comments}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="btn"
//           style={{
//             backgroundColor: 'yellowgreen',
//             color: 'black',
//             border: 'none',
//             fontWeight: 'bold'
//           }}
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Feedback;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     sid: '',
//     feedback_type: '',
//     rating: '',
//     comments: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       student: {
//         sid: formData.sid
//       },
//       feedback_type: formData.feedback_type,
//       rating: parseInt(formData.rating),
//       comments: formData.comments
//     };

//     try {
//       await axios.post('http://localhost:8081/feedback', payload);
//       setMessage('Feedback submitted successfully!');
//       setFormData({ sid: '', feedback_type: '', rating: '', comments: '' });
//     } catch (error) {
//       setMessage('Failed to submit feedback. Please try again.');
//       console.error(error);
//     }
//   };

//   // Styles for inputs and selects with black bg and yellowgreen text
//   const inputSelectStyle = {
//     backgroundColor: 'black',
//     color: 'yellowgreen',
//     borderColor: 'yellowgreen'
//   };

//   // To style dropdown option text color in most browsers is limited, but this will style the select box itself

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #001f3f, #000814)', // deep navy blue gradient outside
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '40px 10px'
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           backgroundColor: 'black',  // card background remains black
//           padding: '30px',
//           borderRadius: '10px',
//           color: 'white',
//           maxWidth: '600px',
//           width: '100%',
//           boxShadow: '0 0 15px 3px yellowgreen'
//         }}
//       >
//         <h2 style={{ color: 'yellowgreen', marginBottom: '1.5rem' }}>Submit Feedback</h2>
//         {message && (
//           <div
//             className="alert alert-info"
//             style={{ backgroundColor: 'yellowgreen', color: 'black' }}
//           >
//             {message}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="sid" className="form-label" style={{ color: 'white' }}>
//               Student ID
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="sid"
//               name="sid"
//               value={formData.sid}
//               onChange={handleChange}
//               required
//               style={inputSelectStyle}
//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="feedback_type" className="form-label" style={{ color: 'white' }}>
//               Feedback Type
//             </label>
//             <select
//               id="feedback_type"
//               name="feedback_type"
//               className="form-select"
//               value={formData.feedback_type}
//               onChange={handleChange}
//               required
//               style={inputSelectStyle}
//             >
//               <option value="" disabled style={{ color: 'yellowgreen', backgroundColor: 'black' }}>
//                 -- Select Feedback Type --
//               </option>
//               <option value="Courses" style={{ color: 'yellowgreen', backgroundColor: 'black' }}>Courses</option>
//               <option value="Faculty" style={{ color: 'yellowgreen', backgroundColor: 'black' }}>Faculty</option>
//               <option value="Events" style={{ color: 'yellowgreen', backgroundColor: 'black' }}>Events</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="rating" className="form-label" style={{ color: 'white' }}>
//               Rating (1-5)
//             </label>
//             <select
//               id="rating"
//               name="rating"
//               className="form-select"
//               value={formData.rating}
//               onChange={handleChange}
//               required
//               style={inputSelectStyle}
//             >
//               <option value="" disabled style={{ color: 'yellowgreen', backgroundColor: 'black' }}>
//                 -- Select Rating --
//               </option>
//               {[1, 2, 3, 4, 5].map(num => (
//                 <option
//                   key={num}
//                   value={num}
//                   style={{ color: 'yellowgreen', backgroundColor: 'black' }}
//                 >
//                   {num}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="comments" className="form-label" style={{ color: 'white' }}>
//               Comments
//             </label>
//             <textarea
//               className="form-control"
//               id="comments"
//               name="comments"
//               rows="3"
//               value={formData.comments}
//               onChange={handleChange}
//               required
//               style={{
//                 backgroundColor: 'black',
//                 color: 'yellowgreen',
//                 borderColor: 'yellowgreen'
//               }}
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="btn"
//             style={{
//               backgroundColor: 'yellowgreen',
//               color: 'black',
//               border: 'none',
//               fontWeight: 'bold'
//             }}
//           >
//             Submit Feedback
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feedback;



import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    sid: '',
    feedback_type: '',
    rating: '',
    comments: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      student: { sid: formData.sid },
      feedback_type: formData.feedback_type,
      rating: parseInt(formData.rating),
      comments: formData.comments
    };

    try {
      await axios.post('http://localhost:8081/feedback', payload);
      setMessage('Feedback submitted successfully!');
      setFormData({ sid: '', feedback_type: '', rating: '', comments: '' });
    } catch (error) {
      setMessage('Failed to submit feedback. Please try again.');
      console.error(error);
    }
  };

  // Updated style for inputs and selects with soft gradient-friendly theme
  const inputSelectStyle = {
    backgroundColor: '#fff9c4', // light yellow
    color: '#333',
    borderColor: '#3979ad'
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #3979ad, #fff9c4, #ffcdd2)', // updated gradient
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 10px'
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: 'white', // lighter card for better readability
          padding: '30px',
          borderRadius: '12px',
          color: '#333',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 0 20px rgba(57, 121, 173, 0.5)' // soft blue glow
        }}
      >
        <h2 style={{ color: '#3979ad', marginBottom: '1.5rem' }}>Submit Feedback</h2>
        {message && (
          <div
            className="alert alert-info"
            style={{ backgroundColor: '#ffcdd2', color: '#333', border: '1px solid #3979ad' }}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="sid" className="form-label" style={{ color: '#3979ad' }}>
              Student ID
            </label>
            <input
              type="text"
              className="form-control"
              id="sid"
              name="sid"
              value={formData.sid}
              onChange={handleChange}
              required
              style={inputSelectStyle}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="feedback_type" className="form-label" style={{ color: '#3979ad' }}>
              Feedback Type
            </label>
            <select
              id="feedback_type"
              name="feedback_type"
              className="form-select"
              value={formData.feedback_type}
              onChange={handleChange}
              required
              style={inputSelectStyle}
            >
              <option value="" disabled>
                -- Select Feedback Type --
              </option>
              <option value="Courses">Courses</option>
              <option value="Faculty">Faculty</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="rating" className="form-label" style={{ color: '#3979ad' }}>
              Rating (1-5)
            </label>
            <select
              id="rating"
              name="rating"
              className="form-select"
              value={formData.rating}
              onChange={handleChange}
              required
              style={inputSelectStyle}
            >
              <option value="" disabled>
                -- Select Rating --
              </option>
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="comments" className="form-label" style={{ color: '#3979ad' }}>
              Comments
            </label>
            <textarea
              className="form-control"
              id="comments"
              name="comments"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
              required
              style={inputSelectStyle}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: '#3979ad',
              color: 'white',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
