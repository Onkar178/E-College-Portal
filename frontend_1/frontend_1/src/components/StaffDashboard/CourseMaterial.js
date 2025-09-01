







//more new code
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import staffAxios from "../../api/staffAxios";

const UploadCourseMaterial = () => {
  const [staffId, setStaffId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState(null);
  const [videos, setVideos] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [materials, setMaterials] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const user = useSelector((state) => state.auth.user);

  // ✅ Fetch staff ID (and courses if included in response)
  // useEffect(() => {
  //   const fetchStaffData = async () => {
  //     try {
  //       const res = await staffAxios.get(`/staff/uid/${user.uid}`);
  //       setStaffId(res.data.staffId);
  //       setCourses(res.data.courses || []);
  //     } catch (error) {
  //       console.error("Failed to fetch staff by UID:", error);
  //       setMessage("❌ Failed to fetch staff info");
  //     }
  //   };

  //   if (user?.rid === 2 && user.uid) {
  //     fetchStaffData();
  //   }
  // }, [user]);



  useEffect(() => {
  const fetchStaffAndCourses = async () => {
    try {
      // Step 1: Get staff details by UID
      const staffRes = await staffAxios.get(`/staff/uid/${user.uid}`);
      const id = staffRes.data.staffId;
      setStaffId(id);

      // Step 2: Get assigned courses for this staff
      const courseRes = await staffAxios.get(`/course/by-staff/${id}`);
      setCourses(courseRes.data); // This will now fill the dropdown
    } catch (error) {
      console.error("Error fetching staff or courses:", error);
      setMessage("❌ Failed to load courses");
    }
  };

  if (user?.rid === 2 && user.uid) {
    fetchStaffAndCourses();
  }
}, [user]);

  // ✅ Fetch course materials when a course is selected
  const fetchMaterialsByCourse = async (courseId) => {
    try {
      const res = await staffAxios.get(`/staff/material/by-course/${courseId}`);
      setMaterials(res.data);
    } catch (error) {
      console.error("Error fetching materials:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedCourseId || !title || !notes || !videos) {
      setMessage("⚠️ All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("courseId", selectedCourseId);
    formData.append("staffId", staffId);
    formData.append("notes", notes);
    formData.append("videos", videos);

    setIsLoading(true);
    try {
      const res = await staffAxios.post("/staff/material/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("✅ " + res.data);
      setTitle("");
      setSelectedCourseId("");
      setNotes(null);
      setVideos(null);
      setMaterials([]);
    } catch (error) {
      console.error("Upload failed:", error);
      setMessage("❌ Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      try {
        await staffAxios.delete(`/staff/material/delete/${id}`);
        fetchMaterialsByCourse(selectedCourseId);
      } catch (error) {
        alert("Delete failed.");
      }
    }
  };

  const handleUpdate = async (id) => {
    try {
      await staffAxios.put(`/staff/material/update/${id}`, { title: editTitle });
      setEditId(null);
      fetchMaterialsByCourse(selectedCourseId);
    } catch (error) {
      alert("Update failed.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow border-0 mb-4">
        <div className="card-header bg-primary text-white text-center">
          <h4>📤 Upload Course Material</h4>
        </div>
        <div className="card-body">
          {message && (
            <div
              className={`alert ${
                message.startsWith("✅")
                  ? "alert-success"
                  : message.startsWith("⚠️")
                  ? "alert-warning"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {message}
            </div>
          )}

          <form onSubmit={handleUpload}>
            <div className="mb-3">
              <label className="form-label fw-bold">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter material title"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Select Course</label>
              <select
                className="form-select"
                value={selectedCourseId}
                onChange={(e) => {
                  setSelectedCourseId(e.target.value);
                  fetchMaterialsByCourse(e.target.value);
                }}
                required
              >
                <option value="">-- Select Course --</option>
                {courses.map((course) => (
                  <option key={course.courseId} value={course.courseId}>
                    {course.courseName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Upload Notes (PDF)</label>
              <input
                type="file"
                className="form-control"
                accept=".pdf"
                onChange={(e) => setNotes(e.target.files[0])}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Upload Video (MP4)</label>
              <input
                type="file"
                className="form-control"
                accept="video/*"
                onChange={(e) => setVideos(e.target.files[0])}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-${isLoading ? "secondary" : "primary"} w-100`}
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload Material"}
            </button>
          </form>
        </div>
      </div>

      {materials.length > 0 && (
        <div className="card">
          <div className="card-header bg-dark text-white">
            📁 Uploaded Materials for Course ID: {selectedCourseId}
          </div>
          <div className="card-body table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Notes</th>
                  <th>Video</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((mat) => (
                  <tr key={mat.id}>
                    <td>{mat.id}</td>
                    <td>
                      {editId === mat.id ? (
                        <input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="form-control"
                        />
                      ) : (
                        mat.title
                      )}
                    </td>
                    <td>{mat.notes ? "📄" : "❌"}</td>
                    <td>{mat.videos ? "🎞️" : "❌"}</td>
                    <td>
                      {editId === mat.id ? (
                        <>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => handleUpdate(mat.id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => setEditId(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => {
                              setEditId(mat.id);
                              setEditTitle(mat.title);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(mat.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCourseMaterial;
