// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:8080/student";

// // Fetch all placement opportunities
// const getAllOpportunities = () =>
//   axios.get(`${API_BASE}/placementdata`);

// // Fetch all applications by student ID
// const getApplicationsBySid = (sid) =>
//   axios.get(`${API_BASE}/placementApp/${sid}`);

// // Apply for opportunity with resume upload (multipart/form-data)
// const applyForOpportunity = (sid, opportunityId, resumeFile) => {
//   const formData = new FormData();
//   formData.append("resume", resumeFile);

//   return axios.post(
//     `${API_BASE}/placementApp/apply/${sid}/${opportunityId}`,
//     formData,
//     {
//       headers: { "Content-Type": "multipart/form-data" },
//     }
//   );
// };

// export default function PlacementDashboard() {
//   const studentId = 101; // number type as per backend
//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [resumeFile, setResumeFile] = useState(null);

//   useEffect(() => {
//     fetchOpportunities();
//     fetchApplications();
//   }, []);

//   const fetchOpportunities = async () => {
//     try {
//       const res = await getAllOpportunities();
//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       // Extract unique types
//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (error) {
//       console.error("Error fetching opportunities:", error);
//     }
//   };

//   const fetchApplications = async () => {
//     try {
//       const res = await getApplicationsBySid(studentId);
//       setApplications(res.data);
//     } catch (error) {
//       console.error("Error fetching applications:", error);
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

//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleApply = async (opportunityId) => {
//     if (!resumeFile) {
//       alert("Please upload your resume before applying.");
//       return;
//     }

//     try {
//       await applyForOpportunity(studentId, opportunityId, resumeFile);
//       alert("Application submitted successfully!");
//       setResumeFile(null);
//       fetchApplications(); // Refresh application list
//     } catch (error) {
//       console.error("Error applying:", error);
//       alert("Failed to apply. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#121212",
//         minHeight: "100vh",
//         padding: "20px",
//         color: "#fff",
//       }}
//     >
//       <h2 className="mb-4" style={{ color: "#9ACD32" }}>
//         Placement Opportunities
//       </h2>

//       {/* Filter by Type */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//           style={{
//             backgroundColor: "#000",
//             color: "#fff",
//             border: "1px solid #9ACD32",
//           }}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Resume upload - one input for all applications */}
//       <div className="mb-3">
//         <label
//           htmlFor="resumeUpload"
//           style={{ color: "#9ACD32", fontWeight: "bold" }}
//         >
//           Upload Resume (PDF)
//         </label>
//         <input
//           id="resumeUpload"
//           type="file"
//           accept=".pdf"
//           className="form-control"
//           onChange={handleResumeChange}
//         />
//       </div>

//       {/* Opportunities List */}
//       <div className="row">
//         {filteredOpportunities.map((opp) => (
//           <div key={opp.opportunityId} className="col-md-4 mb-4">
//             <div
//               className="card shadow-sm h-100"
//               style={{ backgroundColor: "#000", color: "#fff", border: "1px solid #333" }}
//             >
//               <div className="card-body">
//                 <h5 className="card-title" style={{ color: "#fff" }}>
//                   {opp.title}
//                 </h5>
//                 <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
//                   {opp.companyName}
//                 </h6>
//                 <p className="card-text">{opp.description}</p>
//                 <p>
//                   <strong>Type:</strong> {opp.type}
//                 </p>
//                 <p>
//                   <strong>Deadline:</strong>{" "}
//                   {new Date(opp.deadline).toLocaleDateString()}
//                 </p>
//                 <button
//                   className="w-100"
//                   style={{
//                     backgroundColor: "#9ACD32",
//                     color: "#000",
//                     fontWeight: "bold",
//                     border: "none",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     transition: "background-color 0.3s ease",
//                   }}
//                   onMouseOver={(e) => (e.target.style.backgroundColor = "#8BC034")}
//                   onMouseOut={(e) => (e.target.style.backgroundColor = "#9ACD32")}
//                   onClick={() => handleApply(opp.opportunityId)}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* My Applications Section */}
//       <div className="mt-5">
//         <h3 style={{ color: "#9ACD32" }}>My Applications</h3>
//         {applications.length === 0 ? (
//           <p>No applications submitted yet.</p>
//         ) : (
//           <table
//             className="table table-bordered"
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               borderColor: "#9ACD32",
//             }}
//           >
//             <thead style={{ backgroundColor: "#9ACD32", color: "#000" }}>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Company</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.map((app, index) => (
//                 <tr key={index} style={{ borderColor: "#9ACD32" }}>
//                   <td>{app.placementData?.title}</td>
//                   <td>{app.placementData?.description}</td>
//                   <td>{app.placementData?.companyName}</td>
//                   <td
//                     style={{
//                       color:
//                         app.status === "Pending"
//                           ? "#FFD700"
//                           : app.status === "Accepted"
//                           ? "#32CD32"
//                           : "#FF4500",
//                     }}
//                   >
//                     {app.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const API_BASE = "http://localhost:8080/student";

// // Fetch all placement opportunities
// const getAllOpportunities = () =>
//   axios.get(`${API_BASE}/placementdata`);

// // Fetch all applications by student ID
// const getApplicationsBySid = (sid) =>
//   axios.get(`${API_BASE}/placementApp/${sid}`);

// // Apply for opportunity with resume upload (multipart/form-data)
// const applyForOpportunity = (sid, opportunityId, resumeFile) => {
//   const formData = new FormData();
//   formData.append("resume", resumeFile);

//   return axios.post(
//     `${API_BASE}/placementApp/apply/${sid}/${opportunityId}`,
//     formData,
//     {
//       headers: { "Content-Type": "multipart/form-data" },
//     }
//   );
// };

// export default function PlacementDashboard() {
//   const studentId = 101; // get dynamically in your real app
//   const [opportunities, setOpportunities] = useState([]);
//   const [filteredOpportunities, setFilteredOpportunities] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [types, setTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState("");
//   const [appFilterType, setAppFilterType] = useState(""); // filter for applications
//   const [resumeFile, setResumeFile] = useState(null);

//   useEffect(() => {
//     fetchOpportunities();
//     fetchApplications();
//   }, []);

//   const fetchOpportunities = async () => {
//     try {
//       const res = await getAllOpportunities();
//       setOpportunities(res.data);
//       setFilteredOpportunities(res.data);

//       // Extract unique types from opportunities
//       const uniqueTypes = [...new Set(res.data.map((item) => item.type))];
//       setTypes(uniqueTypes);
//     } catch (error) {
//       console.error("Error fetching opportunities:", error);
//     }
//   };

//   const fetchApplications = async () => {
//     try {
//       const res = await getApplicationsBySid(studentId);
//       setApplications(res.data);
//       setFilteredApplications(res.data); // Initially show all
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
//       setFilteredOpportunities(opportunities.filter((o) => o.type === type));
//     }
//   };

//   // Filter applications by type
//   const handleAppFilterChange = (e) => {
//     const type = e.target.value;
//     setAppFilterType(type);
//     if (type === "") {
//       setFilteredApplications(applications);
//     } else {
//       setFilteredApplications(
//         applications.filter((app) => app.placementData?.type === type)
//       );
//     }
//   };

//   const handleResumeChange = (e) => {
//     setResumeFile(e.target.files[0]);
//   };

//   const handleApply = async (opportunityId) => {
//     if (!resumeFile) {
//       alert("Please upload your resume before applying.");
//       return;
//     }

//     try {
//       await applyForOpportunity(studentId, opportunityId, resumeFile);
//       alert("Application submitted successfully!");
//       setResumeFile(null);
//       fetchApplications(); // Refresh application list
//     } catch (error) {
//       console.error("Error applying:", error);
//       alert("Failed to apply. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#121212",
//         minHeight: "100vh",
//         padding: "20px",
//         color: "#fff",
//       }}
//     >
//       <h2 className="mb-4" style={{ color: "#9ACD32" }}>
//         Placement Opportunities
//       </h2>

//       {/* Filter opportunities by Type */}
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={selectedType}
//           onChange={handleTypeChange}
//           style={{
//             backgroundColor: "#000",
//             color: "#fff",
//             border: "1px solid #9ACD32",
//           }}
//         >
//           <option value="">All Types</option>
//           {types.map((type, index) => (
//             <option key={index} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Resume upload */}
//       <div className="mb-3">
//         <label
//           htmlFor="resumeUpload"
//           style={{ color: "#9ACD32", fontWeight: "bold" }}
//         >
//           Upload Resume (PDF)
//         </label>
//         <input
//           id="resumeUpload"
//           type="file"
//           accept=".pdf"
//           className="form-control"
//           onChange={handleResumeChange}
//         />
//       </div>

//       {/* Opportunities List */}
//       <div className="row">
//         {filteredOpportunities.map((opp) => (
//           <div key={opp.opportunityId} className="col-md-4 mb-4">
//             <div
//               className="card shadow-sm h-100"
//               style={{
//                 backgroundColor: "#000",
//                 color: "#fff",
//                 border: "1px solid #333",
//               }}
//             >
//               <div className="card-body">
//                 <h5 className="card-title" style={{ color: "#fff" }}>
//                   {opp.title}
//                 </h5>
//                 <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
//                   {opp.companyName}
//                 </h6>
//                 <p className="card-text">{opp.description}</p>
//                 <p>
//                   <strong>Type:</strong> {opp.type}
//                 </p>
//                 <p>
//                   <strong>Deadline:</strong>{" "}
//                   {new Date(opp.deadline).toLocaleDateString()}
//                 </p>
//                 <button
//                   className="w-100"
//                   style={{
//                     backgroundColor: "#9ACD32",
//                     color: "#000",
//                     fontWeight: "bold",
//                     border: "none",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     transition: "background-color 0.3s ease",
//                   }}
//                   onMouseOver={(e) =>
//                     (e.target.style.backgroundColor = "#8BC034")
//                   }
//                   onMouseOut={(e) =>
//                     (e.target.style.backgroundColor = "#9ACD32")
//                   }
//                   onClick={() => handleApply(opp.opportunityId)}
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* My Applications Section */}
//       <div className="mt-5">
//         <h3 style={{ color: "#9ACD32" }}>My Applications</h3>

//         {/* Filter applications by Type */}
//         <div className="mb-3" style={{ maxWidth: "300px" }}>
//           <select
//             className="form-select"
//             value={appFilterType}
//             onChange={handleAppFilterChange}
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               border: "1px solid #9ACD32",
//             }}
//           >
//             <option value="">All Types</option>
//             {types.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         {filteredApplications.length === 0 ? (
//           <p>No applications submitted yet.</p>
//         ) : (
//           <table
//             className="table table-bordered"
//             style={{
//               backgroundColor: "#000",
//               color: "#fff",
//               borderColor: "#9ACD32",
//             }}
//           >
//             <thead style={{ backgroundColor: "#9ACD32", color: "#000" }}>
//               <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Company</th>
//                 <th>Type</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredApplications.map((app, index) => (
//                 <tr key={index} style={{ borderColor: "#9ACD32" }}>
//                   <td>{app.placementData?.title}</td>
//                   <td>{app.placementData?.description}</td>
//                   <td>{app.placementData?.companyName}</td>
//                   <td>{app.placementData?.type}</td>
//                   <td
//                     style={{
//                       color:
//                         app.status === "Pending"
//                           ? "#FFD700"
//                           : app.status === "Accepted"
//                           ? "#32CD32"
//                           : "#FF4500",
//                     }}
//                   >
//                     {app.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const API_BASE = "http://localhost:8081/student";

const PlacementApplications = () => {
  const loggedInUid = useSelector((state) => state.auth.user?.uid);
  const [studentSid, setStudentSid] = useState(null);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get SID from UID
  useEffect(() => {
    if (loggedInUid) {
      (async () => {
        try {
          const res = await axios.get(`${API_BASE}/profile/${loggedInUid}`);
          if (res.data && res.data.sid) {
            setStudentSid(res.data.sid);
          } else {
            setError("Student profile not found or SID missing.");
          }
        } catch {
          setError("Failed to load student profile");
        }
      })();
    }
  }, [loggedInUid]);

  // Fetch applications for SID
  useEffect(() => {
    if (studentSid !== null) {
      setLoading(true);
      setError(null);
      axios
        .get(`${API_BASE}/placementApp/student/${studentSid}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setApplications(res.data);
          } else {
            setApplications([]);
          }
        })
        .catch(() => {
          setError("Failed to load applications");
          setApplications([]);
        })
        .finally(() => setLoading(false));
    }
  }, [studentSid]);

  return (
    <div className="container mt-4">
      <h2>My Placement Applications</h2>

      {loading && <p>Loading applications...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && applications.length === 0 && (
        <p>You have not applied to any placement opportunities yet.</p>
      )}

      {!loading && applications.length > 0 && (
        <div className="list-group">
          {applications.map((app) => (
            <div
              key={app.applicationId}
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{app.placementData?.title || "No Title"}</h5>
                <small>Status: {app.status}</small>
              </div>
              <p className="mb-1">{app.placementData?.companyName || "No Company"}</p>
              {/* If you add appliedDate, show here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlacementApplications;
