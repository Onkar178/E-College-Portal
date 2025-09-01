


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const API_BASE = "http://localhost:8081/api/placements";

// // // Fetch all opportunities
// // const getAllOpportunities = () => axios.get(`${API_BASE}/opportunities`);

// // // Apply for an opportunity
// // const applyForOpportunity = (application) =>
// //   axios.post(`${API_BASE}/apply`, application);

// // // Get applications by student ID
// // const getApplicationsBySid = (sid) =>
// //   axios.get(`${API_BASE}/applications/${sid}`);

// // export default function PlacementDashboard() {
// //   const [opportunities, setOpportunities] = useState([]);
// //   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
// //   const [types, setTypes] = useState([]);
// //   const [selectedType, setSelectedType] = useState("");

// //   useEffect(() => {
// //     fetchOpportunities();
// //   }, []);

// //   const fetchOpportunities = async () => {
// //     try {
// //       const res = await getAllOpportunities();
// //       setOpportunities(res.data);
// //       setFilteredOpportunities(res.data);

// //       // Extract unique types dynamically
// //       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
// //       setTypes(uniqueTypes);
// //     } catch (error) {
// //       console.error("Error fetching opportunities:", error);
// //     }
// //   };

// //   const handleTypeChange = (e) => {
// //     const type = e.target.value;
// //     setSelectedType(type);
// //     if (type === "") {
// //       setFilteredOpportunities(opportunities);
// //     } else {
// //       setFilteredOpportunities(
// //         opportunities.filter((o) => o.type === type)
// //       );
// //     }
// //   };

// //   const handleApply = async (opportunityId) => {
// //     const application = {
// //       sid: "S101", // Replace with logged-in student's ID
// //       opportunity: { opportunityId },
// //       resume: "https://example.com/resume.pdf",
// //       status: "Pending",
// //     };
// //     try {
// //       await applyForOpportunity(application);
// //       alert("Application submitted successfully!");
// //     } catch (error) {
// //       console.error("Error applying:", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2 className="mb-4">Placement Opportunities</h2>

// //       {/* Filter by Type */}
// //       <div className="mb-3">
// //         <select
// //           className="form-select"
// //           value={selectedType}
// //           onChange={handleTypeChange}
// //         >
// //           <option value="">All Types</option>
// //           {types.map((type, index) => (
// //             <option key={index} value={type}>
// //               {type}
// //             </option>
// //           ))}
// //         </select>
// //       </div>

// //       {/* Opportunities List */}
// //       <div className="row">
// //         {filteredOpportunities.map((opp) => (
// //           <div key={opp.opportunityId} className="col-md-4 mb-4">
// //             <div className="card shadow-sm h-100">
// //               <div className="card-body">
// //                 <h5 className="card-title">{opp.title}</h5>
// //                 <h6 className="card-subtitle mb-2 text-muted">
// //                   {opp.company_name}
// //                 </h6>
// //                 <p className="card-text">{opp.description}</p>
// //                 <p>
// //                   <strong>Type:</strong> {opp.type}
// //                 </p>
// //                 <p>
// //                   <strong>Deadline:</strong> {opp.deadline}
// //                 </p>
// //                 <button
// //                   className="btn btn-primary w-100"
// //                   onClick={() => handleApply(opp.opportunityId)}
// //                 >
// //                   Apply
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:8081/api/placements";

// // Fetch all opportunities
// const getAllOpportunities = () => axios.get(`${API_BASE}/opportunities`);

// // Apply for an opportunity
// const applyForOpportunity = (application) =>
//   axios.post(`${API_BASE}/apply`, application);

// export default function PlacementDashboard() {
//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");

//   useEffect(() => {
//     fetchOpportunities();
//   }, []);

//   // Fetch placement opportunities from backend
//   const fetchOpportunities = async () => {
//     try {
//       const res = await getAllOpportunities();
//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       // Extract unique opportunity types for filter dropdown
//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (error) {
//       console.error("Error fetching opportunities:", error);
//       alert("Failed to load placement opportunities.");
//     }
//   };

//   // Handle filter change by type
//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     if (type === "") {
//       setFilteredOpportunities(opportunities);
//     } else {
//       setFilteredOpportunities(
//         opportunities.filter((o) => o.type === type)
//       );
//     }
//   };

//   // Handle applying to an opportunity
//   const handleApply = async (opportunityId) => {
//     // Replace this sid with actual logged-in student id logic
//     const sid = localStorage.getItem("sid") || "S101";

//     const application = {
//       sid: sid,
//       opportunity: { opportunityId },
//       resume: "https://example.com/resume.pdf", // Replace with real resume URL/file upload logic
//       status: "Pending",
//     };

//     try {
//       await applyForOpportunity(application);
//       alert("Application submitted successfully!");
//     } catch (error) {
//       console.error("Error applying:", error);
//       alert("Failed to submit application.");
//     }
//   };

//   return (
//     <div>
//       <h2 className="mb-4">Placement Opportunities</h2>

//       {/* Filter Dropdown */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* List of opportunities */}
//       <div className="row">
//         {filteredOpportunities.length === 0 && (
//           <p>No placement opportunities available.</p>
//         )}
//         {filteredOpportunities.map((opp) => (
//           <div key={opp.opportunityId} className="col-md-4 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{opp.title}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   {opp.company_name}
//                 </h6>
//                 <p className="card-text">{opp.description}</p>
//                 <p>
//                   <strong>Type:</strong> {opp.type}
//                 </p>
//                 <p>
//                   <strong>Deadline:</strong> {new Date(opp.deadline).toLocaleDateString()}
//                 </p>
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => handleApply(opp.opportunityId)}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:8081/student";

// export default function PlacementDashboard() {
//   const studentId = 101; // Replace with real logged-in student ID

//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");

//   const [applications, setApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);

//   useEffect(() => {
//     fetchOpportunities();
//     fetchApplications();
//   }, []);

//   // Fetch all placement opportunities
//   const fetchOpportunities = async () => {
//     try {
//       const res = await axios.get(`${API_BASE}/placementdata/getAllData`);
//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       // Extract unique types dynamically
//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (error) {
//       console.error("Error fetching opportunities:", error);
//     }
//   };

//   // Fetch student applications
//   const fetchApplications = async () => {
//     try {
//       const res = await axios.get(`${API_BASE}/placementApp/${studentId}`);
//       setApplications(res.data);
//     } catch (error) {
//       console.error("Error fetching applications:", error);
//     }
//   };

//   // Filter opportunities by type
//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     if (type === "") {
//       setFilteredOpportunities(opportunities);
//     } else {
//       setFilteredOpportunities(
//         opportunities.filter((o) => o.type === type)
//       );
//     }
//   };

//   // Check if student already applied to opportunity
//   const hasApplied = (opportunityId) => {
//     return applications.some(
//       (app) => app.placementData?.opportunityId === opportunityId
//     );
//   };

//   // Open modal to upload resume when applying
//   const openApplyModal = (opportunityId) => {
//     setSelectedOpportunityId(opportunityId);
//     setResumeFile(null);
//     setShowModal(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOpportunityId(null);
//     setResumeFile(null);
//   };

//   // Handle resume file change
//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   // Submit application with resume
//   const handleApplySubmit = async (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload your resume.");
//       return;
//     }
//     try {
//       const formData = new FormData();
//       formData.append("resume", resumeFile);

//       await axios.post(
//         `${API_BASE}/placementApp/apply/${studentId}/${selectedOpportunityId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Application submitted successfully!");
//       closeModal();
//       fetchApplications(); // Refresh application list
//     } catch (error) {
//       console.error("Error applying:", error);
//       alert("Failed to apply. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Placement Opportunities</h2>

//       {/* Filter Dropdown */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Opportunities List */}
//       <div className="row">
//         {filteredOpportunities.length === 0 && (
//           <p>No opportunities available for the selected type.</p>
//         )}

//         {filteredOpportunities.map((opp) => (
//           <div key={opp.opportunityId} className="col-md-6 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{opp.title}</h5>
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   {opp.companyName}
//                 </h6>
//                 <p className="card-text">{opp.description}</p>
//                 <p>
//                   <strong>Type:</strong> {opp.type}
//                 </p>
//                 <p>
//                   <strong>Deadline:</strong>{" "}
//                   {new Date(opp.deadline).toLocaleString()}
//                 </p>
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => openApplyModal(opp.opportunityId)}
//                   disabled={hasApplied(opp.opportunityId)}
//                 >
//                   {hasApplied(opp.opportunityId) ? "Applied" : "Apply"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Apply Modal */}
//       {showModal && (
//         <div
//           className="modal d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog" role="document">
//             <form className="modal-content" onSubmit={handleApplySubmit}>
//               <div className="modal-header">
//                 <h5 className="modal-title">Upload Resume</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={closeModal}
//                 />
//               </div>
//               <div className="modal-body">
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   className="form-control"
//                   onChange={handleResumeChange}
//                   required
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Submit Application
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:8081/student";

// export default function PlacementDashboard() {
//   // Instead of hardcoded ID, use state for studentSid
//   const [studentSid, setStudentSid] = useState(null);

//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");

//   const [applications, setApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);

//   const [loadingOpportunities, setLoadingOpportunities] = useState(false);
//   const [loadingApplications, setLoadingApplications] = useState(false);
//   const [applying, setApplying] = useState(false);
//   const [error, setError] = useState(null);

//   // You need uid (user id) to get student profile and sid
//   const loggedInUid = 101; // Replace with actual logged-in UID from your auth context/state

//   useEffect(() => {
//     fetchStudentProfile();
//     fetchOpportunities();
//   }, []);

//   useEffect(() => {
//     if (studentSid !== null) {
//       fetchApplications();
//     }
//   }, [studentSid]);

//   // Fetch student profile by uid to get sid
//   const fetchStudentProfile = async () => {
//     try {
//       const res = await axios.get(`${API_BASE}/profile/${loggedInUid}`);
//       console.log("Student profile response:", res.data);  // Add this line to debug
//       if (res.data && res.data.sid) {
//         setStudentSid(res.data.sid);
//       } else {
//         setError("Student profile not found or SID missing.");
//       }
//     } catch (err) {
//       console.error("Error fetching student profile:", err);
//       setError("Failed to load student profile");
//     }
//   };

//   const fetchOpportunities = async () => {
//     setLoadingOpportunities(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/placementdata/getAllData`);
//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (err) {
//       console.error("Error fetching opportunities:", err);
//       setError("Failed to load opportunities");
//     } finally {
//       setLoadingOpportunities(false);
//     }
//   };

//   const fetchApplications = async () => {
//     if (studentSid === null) {
//       return; // No SID yet, cannot fetch applications
//     }
//     setLoadingApplications(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/placementApp/student/${studentSid}`);
//       if (Array.isArray(res.data)) {
//         setApplications(res.data);
//       } else {
//         setApplications([]);
//         console.warn("Applications response is not an array");
//       }
//     } catch (error) {
//       console.error("Error fetching applications:", error);
//       setApplications([]);
//     } finally {
//       setLoadingApplications(false);
//     }
//   };

//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     if (type === "") {
//       setFilteredOpportunities(opportunities);
//     } else {
//       setFilteredOpportunities(opportunities.filter((o) => o.type === type));
//     }
//   };

//   const hasApplied = (opportunityId) => {
//     return applications.some(
//       (app) => app.placementData?.opportunityId === opportunityId
//     );
//   };

//   const openApplyModal = (opportunityId) => {
//     setSelectedOpportunityId(opportunityId);
//     setResumeFile(null);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOpportunityId(null);
//     setResumeFile(null);
//   };

//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleApplySubmit = async (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload your resume.");
//       return;
//     }
//     if (studentSid === null) {
//       alert("Student profile SID not loaded yet. Cannot apply.");
//       return;
//     }
//     setApplying(true);
//     setError(null);
//     try {
//       const formData = new FormData();
//       formData.append("resume", resumeFile);

//       await axios.post(
//         `${API_BASE}/placementApp/apply/${studentSid}/${selectedOpportunityId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Application submitted successfully!");
//       closeModal();
//       fetchApplications();
//     } catch (err) {
//       console.error("Error applying:", err);
//       if (err.response && err.response.data) {
//         alert(err.response.data);
//       } else {
//         alert("Failed to apply. Please try again.");
//       }
//     } finally {
//       setApplying(false);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Placement Opportunities</h2>

//       {error && <div className="alert alert-danger">{error}</div>}

//       {/* Filter Dropdown */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//           disabled={loadingOpportunities}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loadingOpportunities ? (
//         <p>Loading opportunities...</p>
//       ) : filteredOpportunities.length === 0 ? (
//         <p>No opportunities available for the selected type.</p>
//       ) : (
//         <div className="row">
//           {filteredOpportunities.map((opp) => (
//             <div key={opp.opportunityId} className="col-md-6 mb-4">
//               <div className="card shadow-sm h-100">
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{opp.title}</h5>
//                   <h6 className="card-subtitle mb-2 text-muted">
//                     {opp.companyName}
//                   </h6>
//                   <p className="card-text">{opp.description}</p>
//                   <p>
//                     <strong>Type:</strong> {opp.type}
//                   </p>
//                   <p>
//                     <strong>Deadline:</strong>{" "}
//                     {new Date(opp.deadline).toLocaleString()}
//                   </p>
//                   <button
//                     className="btn btn-primary mt-auto"
//                     onClick={() => openApplyModal(opp.opportunityId)}
//                     disabled={hasApplied(opp.opportunityId)}
//                   >
//                     {hasApplied(opp.opportunityId) ? "Applied" : "Apply"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Apply Modal */}
//       {showModal && (
//         <div
//           className="modal d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog" role="document">
//             <form className="modal-content" onSubmit={handleApplySubmit}>
//               <div className="modal-header">
//                 <h5 className="modal-title">Upload Resume</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={closeModal}
//                 />
//               </div>
//               <div className="modal-body">
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   className="form-control"
//                   onChange={handleResumeChange}
//                   required
//                   disabled={applying}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                   disabled={applying}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={applying}
//                 >
//                   {applying ? "Submitting..." : "Submit Application"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector } from "react-redux";

// const API_BASE = "http://localhost:8081/student";

// export default function PlacementDashboard() {
//   // Get logged-in user's UID dynamically from Redux store
//   const loggedInUid = useSelector((state) => state.auth.user?.uid);

//   const [studentSid, setStudentSid] = useState(null);
//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");

//   const [applications, setApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);

//   const [loadingOpportunities, setLoadingOpportunities] = useState(false);
//   const [loadingApplications, setLoadingApplications] = useState(false);
//   const [applying, setApplying] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch student profile and opportunities once loggedInUid is available
//   useEffect(() => {
//     if (loggedInUid) {
//       fetchStudentProfile();
//       fetchOpportunities();
//     }
//   }, [loggedInUid]);

//   // Fetch applications once studentSid (not UID) is loaded
//   useEffect(() => {
//     if (studentSid !== null) {
//       fetchApplications();
//     }
//   }, [studentSid]);

//   // Fetch student profile to get SID based on UID
//   const fetchStudentProfile = async () => {
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/profile/${loggedInUid}`);
//       console.log("Student profile response:", res.data);
//       if (res.data && res.data.sid) {
//         setStudentSid(res.data.sid);
//       } else {
//         setError("Student profile not found or SID missing.");
//       }
//     } catch (err) {
//       console.error("Error fetching student profile:", err);
//       setError("Failed to load student profile");
//     }
//   };

//   // Fetch all placement opportunities
//  const fetchOpportunities = async () => {
//   setLoadingOpportunities(true);
//   setError(null);
//   try {
//     const res = await axios.get(`${API_BASE}/placementdata/getAllData`);
//     console.log("Opportunities API response:", res);
//     console.log("Opportunities data:", res.data);

//     if (!Array.isArray(res.data)) {
//       setError("Opportunities response is not an array");
//       setOpportunities([]);
//       setFilteredOpportunities([]);
//       setTypes([]);
//       return;
//     }

//     setOpportunities(res.data);
//     setFilteredOpportunities(res.data);

//     const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//     setTypes(uniqueTypes);
//   } catch (err) {
//     console.error("Error fetching opportunities:", err);
//     setError("Failed to load opportunities");
//     setOpportunities([]);
//     setFilteredOpportunities([]);
//     setTypes([]);
//   } finally {
//     setLoadingOpportunities(false);
//   }
// };



//   // Fetch applications for this studentSid
//   const fetchApplications = async () => {
//     if (studentSid === null) {
//       return; // No SID yet, cannot fetch applications
//     }
//     setLoadingApplications(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/placementApp/student/${studentSid}`);
//       if (Array.isArray(res.data)) {
//         setApplications(res.data);
//       } else {
//         setApplications([]);
//         console.warn("Applications response is not an array");
//       }
//     } catch (error) {
//       console.error("Error fetching applications:", error);
//       setApplications([]);
//     } finally {
//       setLoadingApplications(false);
//     }
//   };

//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     if (type === "") {
//       setFilteredOpportunities(opportunities);
//     } else {
//       setFilteredOpportunities(opportunities.filter((o) => o.type === type));
//     }
//   };

//   const hasApplied = (opportunityId) => {
//     return applications.some(
//       (app) => app.placementData?.opportunityId === opportunityId
//     );
//   };

//   const openApplyModal = (opportunityId) => {
//     setSelectedOpportunityId(opportunityId);
//     setResumeFile(null);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOpportunityId(null);
//     setResumeFile(null);
//   };

//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleApplySubmit = async (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload your resume.");
//       return;
//     }
//     if (studentSid === null) {
//       alert("Student profile SID not loaded yet. Cannot apply.");
//       return;
//     }
//     setApplying(true);
//     setError(null);
//     try {
//       const formData = new FormData();
//       formData.append("resume", resumeFile);

//       await axios.post(
//         `${API_BASE}/placementApp/apply/${studentSid}/${selectedOpportunityId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Application submitted successfully!");
//       closeModal();
//       fetchApplications(); // refresh applications list
//     } catch (err) {
//       console.error("Error applying:", err);
//       if (err.response && err.response.data) {
//         alert(err.response.data);
//       } else {
//         alert("Failed to apply. Please try again.");
//       }
//     } finally {
//       setApplying(false);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Placement Opportunities</h2>

//       {error && <div className="alert alert-danger">{error}</div>}

//       {/* Filter Dropdown */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//           disabled={loadingOpportunities}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loadingOpportunities ? (
//         <p>Loading opportunities...</p>
//       ) : filteredOpportunities.length === 0 ? (
//         <p>No opportunities available for the selected type.</p>
//       ) : (
//         <div className="row">
//           {filteredOpportunities.map((opp) => (
//             <div key={opp.opportunityId} className="col-md-6 mb-4">
//               <div className="card shadow-sm h-100">
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{opp.title}</h5>
//                   <h6 className="card-subtitle mb-2 text-muted">
//                     {opp.companyName}
//                   </h6>
//                   <p className="card-text">{opp.description}</p>
//                   <p>
//                     <strong>Type:</strong> {opp.type}
//                   </p>
//                   <p>
//                     <strong>Deadline:</strong>{" "}
//                     {new Date(opp.deadline).toLocaleString()}
//                   </p>
//                   <button
//                     className="btn btn-primary mt-auto"
//                     onClick={() => openApplyModal(opp.opportunityId)}
//                     disabled={hasApplied(opp.opportunityId)}
//                   >
//                     {hasApplied(opp.opportunityId) ? "Applied" : "Apply"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Apply Modal */}
//       {showModal && (
//         <div
//           className="modal d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog" role="document">
//             <form className="modal-content" onSubmit={handleApplySubmit}>
//               <div className="modal-header">
//                 <h5 className="modal-title">Upload Resume</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={closeModal}
//                 />
//               </div>
//               <div className="modal-body">
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   className="form-control"
//                   onChange={handleResumeChange}
//                   required
//                   disabled={applying}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                   disabled={applying}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={applying}
//                 >
//                   {applying ? "Submitting..." : "Submit Application"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useSelector } from "react-redux";

// const API_BASE = "http://localhost:8081/student";

// export default function PlacementDashboard() {
//   // Get logged-in user's UID dynamically from Redux store
//   const loggedInUid = useSelector((state) => state.auth.user?.uid);

//   const [studentSid, setStudentSid] = useState(null);
//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");

//   const [applications, setApplications] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);

//   const [loadingOpportunities, setLoadingOpportunities] = useState(false);
//   const [loadingApplications, setLoadingApplications] = useState(false);
//   const [applying, setApplying] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch student profile and opportunities once loggedInUid is available
//   useEffect(() => {
//     if (loggedInUid) {
//       fetchStudentProfile();
//       fetchOpportunities();
//     }
//   }, [loggedInUid]);

//   // Fetch applications once studentSid (not UID) is loaded
//   useEffect(() => {
//     if (studentSid !== null) {
//       fetchApplications();
//     }
//   }, [studentSid]);

//   // Fetch student profile to get SID based on UID
//   const fetchStudentProfile = async () => {
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/profile/${loggedInUid}`);
//       console.log("Student profile response:", res.data);
//       if (res.data && res.data.sid) {
//         setStudentSid(res.data.sid);
//       } else {
//         setError("Student profile not found or SID missing.");
//       }
//     } catch (err) {
//       console.error("Error fetching student profile:", err);
//       setError("Failed to load student profile");
//     }
//   };

//   // Fetch all placement opportunities
//   const fetchOpportunities = async () => {
//     setLoadingOpportunities(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/placementdata/getAllData`);
//       console.log("Opportunities API response:", res);
//       console.log("Opportunities data:", res.data);

//       if (!Array.isArray(res.data)) {
//         setError("Opportunities response is not an array");
//         setOpportunities([]);
//         setFilteredOpportunities([]);
//         setTypes([]);
//         return;
//       }

//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (err) {
//       console.error("Error fetching opportunities:", err);
//       setError("Failed to load opportunities");
//       setOpportunities([]);
//       setFilteredOpportunities([]);
//       setTypes([]);
//     } finally {
//       setLoadingOpportunities(false);
//     }
//   };

//   // Fetch applications for this studentSid
//   const fetchApplications = async () => {
//     if (studentSid === null) {
//       return; // No SID yet, cannot fetch applications
//     }
//     setLoadingApplications(true);
//     setError(null);
//     try {
//       const res = await axios.get(`${API_BASE}/placementApp/student/${studentSid}`);
//       if (Array.isArray(res.data)) {
//         setApplications(res.data);
//       } else {
//         setApplications([]);
//         console.warn("Applications response is not an array");
//       }
//     } catch (error) {
//       console.error("Error fetching applications:", error);
//       setApplications([]);
//     } finally {
//       setLoadingApplications(false);
//     }
//   };

//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     if (type === "") {
//       setFilteredOpportunities(opportunities);
//     } else {
//       setFilteredOpportunities(opportunities.filter((o) => o.type === type));
//     }
//   };

//   const hasApplied = (opportunityId) => {
//     return applications.some(
//       (app) => app.placementData?.opportunityId === opportunityId
//     );
//   };

//   const openApplyModal = (opportunityId) => {
//     setSelectedOpportunityId(opportunityId);
//     setResumeFile(null);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedOpportunityId(null);
//     setResumeFile(null);
//   };

//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleApplySubmit = async (e) => {
//     e.preventDefault();
//     if (!resumeFile) {
//       alert("Please upload your resume.");
//       return;
//     }
//     if (studentSid === null) {
//       alert("Student profile SID not loaded yet. Cannot apply.");
//       return;
//     }
//     setApplying(true);
//     setError(null);
//     try {
//       const formData = new FormData();
//       formData.append("resume", resumeFile);

//       await axios.post(
//         `${API_BASE}/placementApp/apply/${studentSid}/${selectedOpportunityId}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       alert("Application submitted successfully!");
//       closeModal();
//       fetchApplications(); // refresh applications list
//     } catch (err) {
//       console.error("Error applying:", err);

//       // Show error message properly
//       if (err.response && err.response.data) {
//         let message = "";
//         if (typeof err.response.data === "string") {
//           message = err.response.data;
//         } else if (err.response.data.message) {
//           message = err.response.data.message;
//         } else {
//           message = JSON.stringify(err.response.data);
//         }
//         alert(message);
//       } else {
//         alert("Failed to apply. Please try again.");
//       }
//     } finally {
//       setApplying(false);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Placement Opportunities</h2>

//       {error && <div className="alert alert-danger">{error}</div>}

//       {/* Filter Dropdown */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//           disabled={loadingOpportunities}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loadingOpportunities ? (
//         <p>Loading opportunities...</p>
//       ) : filteredOpportunities.length === 0 ? (
//         <p>No opportunities available for the selected type.</p>
//       ) : (
//         <div className="row">
//           {filteredOpportunities.map((opp) => (
//             <div key={opp.opportunityId} className="col-md-6 mb-4">
//               <div className="card shadow-sm h-100">
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{opp.title}</h5>
//                   <h6 className="card-subtitle mb-2 text-muted">
//                     {opp.companyName}
//                   </h6>
//                   <p className="card-text">{opp.description}</p>
//                   <p>
//                     <strong>Type:</strong> {opp.type}
//                   </p>
//                   <p>
//                     <strong>Deadline:</strong>{" "}
//                     {new Date(opp.deadline).toLocaleString()}
//                   </p>
//                   <button
//                     className="btn btn-primary mt-auto"
//                     onClick={() => openApplyModal(opp.opportunityId)}
//                     disabled={hasApplied(opp.opportunityId)}
//                   >
//                     {hasApplied(opp.opportunityId) ? "Applied" : "Apply"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Apply Modal */}
//       {showModal && (
//         <div
//           className="modal d-block"
//           tabIndex="-1"
//           role="dialog"
//           style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog" role="document">
//             <form className="modal-content" onSubmit={handleApplySubmit}>
//               <div className="modal-header">
//                 <h5 className="modal-title">Upload Resume</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={closeModal}
//                 />
//               </div>
//               <div className="modal-body">
//                 <input
//                   type="file"
//                   accept=".pdf"
//                   className="form-control"
//                   onChange={handleResumeChange}
//                   required
//                   disabled={applying}
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                   disabled={applying}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   disabled={applying}
//                 >
//                   {applying ? "Submitting..." : "Submit Application"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const API_BASE = "http://localhost:8081/student";

export default function PlacementDashboard() {
  // Get logged-in user's UID dynamically from Redux store
  const loggedInUid = useSelector((state) => state.auth.user?.uid);

  const [studentSid, setStudentSid] = useState(null);
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const [loadingOpportunities, setLoadingOpportunities] = useState(false);
  const [loadingApplications, setLoadingApplications] = useState(false);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState(null);

  // Fetch student profile and opportunities once loggedInUid is available
  useEffect(() => {
    if (loggedInUid) {
      fetchStudentProfile();
      fetchOpportunities();
    }
  }, [loggedInUid]);

  // Fetch applications once studentSid (not UID) is loaded
  useEffect(() => {
    if (studentSid !== null) {
      fetchApplications();
    }
  }, [studentSid]);

  // Fetch student profile to get SID based on UID
  const fetchStudentProfile = async () => {
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/profile/${loggedInUid}`);
      if (res.data && res.data.sid) {
        setStudentSid(res.data.sid);
      } else {
        setError("Student profile not found or SID missing.");
      }
    } catch (err) {
      console.error("Error fetching student profile:", err);
      setError("Failed to load student profile");
    }
  };

  // Fetch all placement opportunities
  const fetchOpportunities = async () => {
    setLoadingOpportunities(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/placementdata/getAllData`);

      if (!Array.isArray(res.data)) {
        setError("Opportunities response is not an array");
        setOpportunities([]);
        setFilteredOpportunities([]);
        setTypes([]);
        return;
      }

      setOpportunities(res.data);
      setFilteredOpportunities(res.data);

      const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
      setTypes(uniqueTypes);
    } catch (err) {
      console.error("Error fetching opportunities:", err);
      setError("Failed to load opportunities");
      setOpportunities([]);
      setFilteredOpportunities([]);
      setTypes([]);
    } finally {
      setLoadingOpportunities(false);
    }
  };

  // Fetch applications for this studentSid
  const fetchApplications = async () => {
    if (studentSid === null) return;

    setLoadingApplications(true);
    setError(null);
    try {
      const res = await axios.get(
        `${API_BASE}/placementApp/student/${studentSid}`
      );
      if (Array.isArray(res.data)) {
        setApplications(res.data);
      } else {
        setApplications([]);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      setApplications([]);
    } finally {
      setLoadingApplications(false);
    }
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    if (type === "") {
      setFilteredOpportunities(opportunities);
    } else {
      setFilteredOpportunities(opportunities.filter((o) => o.type === type));
    }
  };

  const hasApplied = (opportunityId) => {
    return applications.some(
      (app) => app.placementData?.opportunityId === opportunityId
    );
  };

  const openApplyModal = (opportunityId) => {
    setSelectedOpportunityId(opportunityId);
    setResumeFile(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOpportunityId(null);
    setResumeFile(null);
  };

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume.");
      return;
    }
    if (studentSid === null) {
      alert("Student profile SID not loaded yet. Cannot apply.");
      return;
    }
    setApplying(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);

      await axios.post(
      `${API_BASE}/placementApp/apply/${selectedOpportunityId}/${loggedInUid}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );


      alert("Application submitted successfully!");
      closeModal();
      fetchApplications();
    } catch (err) {
      console.error("Error applying:", err);

      if (err.response && err.response.data) {
        alert(
          typeof err.response.data === "string"
            ? err.response.data
            : err.response.data.message || "Application failed"
        );
      } else {
        alert("Failed to apply. Please try again.");
      }
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Placement Opportunities</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {/* Filter Dropdown */}
      <div className="mb-3">
        <select
          className="form-select"
          value={selectedType}
          onChange={handleTypeChange}
          disabled={loadingOpportunities}
        >
          <option value="">All Types</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {loadingOpportunities ? (
        <p>Loading opportunities...</p>
      ) : filteredOpportunities.length === 0 ? (
        <p>No opportunities available for the selected type.</p>
      ) : (
        <div className="row">
          {filteredOpportunities.map((opp) => (
            <div key={opp.opportunityId} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{opp.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {opp.companyName}
                  </h6>
                  <p className="card-text">{opp.description}</p>
                  <p>
                    <strong>Type:</strong> {opp.type}
                  </p>
                  <p>
                    <strong>Deadline:</strong>{" "}
                    {new Date(opp.deadline).toLocaleString()}
                  </p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => openApplyModal(opp.opportunityId)}
                    disabled={hasApplied(opp.opportunityId)}
                  >
                    {hasApplied(opp.opportunityId) ? "Applied" : "Apply"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Apply Modal */}
      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <form className="modal-content" onSubmit={handleApplySubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Upload Resume</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body">
                <input
                  type="file"
                  accept=".pdf"
                  className="form-control"
                  onChange={handleResumeChange}
                  required
                  disabled={applying}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                  disabled={applying}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={applying}
                >
                  {applying ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
