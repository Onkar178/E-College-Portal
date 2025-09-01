import React, { useEffect, useState } from "react";
import adminAxios from "../../api/adminAxios"; // your axios instance

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Course creation states
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [creating, setCreating] = useState(false);
  const [createMessage, setCreateMessage] = useState("");

  // Assignment states
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedStaffName, setSelectedStaffName] = useState("");
  const [assigning, setAssigning] = useState(false);
  const [assignMessage, setAssignMessage] = useState("");

  useEffect(() => {
    fetchCourses();
    fetchStaff();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await adminAxios.get("/Admin/GetAllCourses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStaff = async () => {
    try {
      // Fixed API path here (removed duplicate /GetAllStaff)
      const response = await adminAxios.get("/Admin/GetAllStaff/GetAllStaff");
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };

  // Course creation handlers
  const handleNewCourseChange = (e) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    if (!newCourse.courseName || !newCourse.startDate || !newCourse.endDate) {
      setCreateMessage("Please fill in all required fields.");
      return;
    }

    setCreating(true);
    setCreateMessage("");

    try {
      const payload = {
        courseName: newCourse.courseName,
        description: newCourse.description,
        startDate: new Date(newCourse.startDate),
        endDate: new Date(newCourse.endDate),
      };

      const response = await adminAxios.post("/Admin/CreateCourse", payload);
      setCreateMessage(response.data.message || "Course created successfully.");
      fetchCourses();
      setNewCourse({ courseName: "", description: "", startDate: "", endDate: "" });
    } catch (error) {
      setCreateMessage("Failed to create course. " + (error.response?.data || error.message));
    } finally {
      setCreating(false);
    }
  };

  // Staff assignment handlers
  const handleAssignClick = (courseId) => {
    setSelectedCourseId(courseId);
    setSelectedStaffName("");
    setAssignMessage("");
  };

  const handleAssignSubmit = async (e) => {
    e.preventDefault();
    if (!selectedStaffName || !selectedCourseId) {
      setAssignMessage("Please select a staff member.");
      return;
    }

    setAssigning(true);
    setAssignMessage("");

    try {
      const payload = {
        courseId: selectedCourseId,
        staffName: selectedStaffName, // match backend DTO property casing
      };
      // Fixed API path here (removed duplicate /AssignStaffToCourseByName)
      const response = await adminAxios.post("/Admin/AssignStaffToCourseByName/AssignStaffToCourseByName", payload);
      setAssignMessage(response.data);
      fetchCourses();
      setSelectedCourseId(null);
      setSelectedStaffName("");
    } catch (error) {
      setAssignMessage(error.response?.data || error.message || "Assignment failed.");
    } finally {
      setAssigning(false);
    }
  };

  if (loading) return <p>Loading courses...</p>;

  return (
    <div className="container mt-4">
      <h2>Create New Course</h2>
      <form onSubmit={handleCreateCourse} className="mb-4 p-3 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Course Name *</label>
          <input
            type="text"
            name="courseName"
            value={newCourse.courseName}
            onChange={handleNewCourseChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={newCourse.description}
            onChange={handleNewCourseChange}
            className="form-control"
            rows={3}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date *</label>
          <input
            type="date"
            name="startDate"
            value={newCourse.startDate}
            onChange={handleNewCourseChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">End Date *</label>
          <input
            type="date"
            name="endDate"
            value={newCourse.endDate}
            onChange={handleNewCourseChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={creating}>
          {creating ? "Creating..." : "Create Course"}
        </button>

        {createMessage && <p className="mt-2">{createMessage}</p>}
      </form>

      <h2>All Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Assigned Staff Name</th> {/* Changed header */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.courseId}>
                  <td>{course.courseId}</td>
                  <td>{course.courseName}</td>
                  <td>{course.description}</td>
                  <td>{formatDate(course.startDate)}</td>
                  <td>{formatDate(course.endDate)}</td>
                  {/* Show staffName from backend, fallback "None" */}
                  <td>{course.staffName || "None"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAssignClick(course.courseId)}
                    >
                      Assign Staff
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Assignment form */}
          {selectedCourseId && (
            <div className="mt-4 p-3 border rounded">
              <h5>Assign Staff to Course ID: {selectedCourseId}</h5>
              <form onSubmit={handleAssignSubmit}>
                <div className="mb-3">
                  <label htmlFor="staffSelect" className="form-label">
                    Select Staff:
                  </label>
                  <select
                    id="staffSelect"
                    className="form-select"
                    value={selectedStaffName}
                    onChange={(e) => setSelectedStaffName(e.target.value)}
                    required
                  >
                    <option value="">-- Select Staff --</option>
                    {staffList.map((staff) => (
                      <option key={staff.staffId} value={staff.staffName}>
                        {staff.staffName}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-success" disabled={assigning}>
                  {assigning ? "Assigning..." : "Assign Staff"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => setSelectedCourseId(null)}
                  disabled={assigning}
                >
                  Cancel
                </button>
              </form>

              {assignMessage && <p className="mt-2">{assignMessage}</p>}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Courses;


