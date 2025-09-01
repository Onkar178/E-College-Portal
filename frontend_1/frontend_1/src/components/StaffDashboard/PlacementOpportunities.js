import React, { useEffect, useState } from "react";
import staffAxios from "../../api/staffAxios";

const PlacementOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    type: "",
    description: "",
    deadline: ""
  });

  // Today's date for restricting past selections
  const today = new Date().toISOString().split("T")[0];

  // Fetch opportunities
  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const res = await staffAxios.get("/placements/all");
      setOpportunities(res.data);
    } catch (err) {
      console.error("Error fetching opportunities", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        deadline: formData.deadline + "T00:00:00"
      };

      await staffAxios.post("/placements/add", formattedData);
      fetchOpportunities();
      setFormData({
        title: "",
        companyName: "",
        type: "",
        description: "",
        deadline: ""
      });
    } catch (err) {
      console.error("Error uploading placement", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await staffAxios.delete(`/placements/${id}`);
      fetchOpportunities();
    } catch (err) {
      console.error("Error deleting placement", err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-primary mb-4">
            Placement Opportunities
          </h2>

          {/* Upload Form */}
          <form onSubmit={handleSubmit} className="row g-3 mb-4">
            <div className="col-md-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="companyName"
                placeholder="Company"
                value={formData.companyName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="type"
                placeholder="Type (Internship/Full-time)"
                value={formData.type}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="form-control"
                min={today} // ✅ Restrict past dates
                required
              />
            </div>
            <div className="col-md-8">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-12 text-end">
              <button type="submit" className="btn btn-primary">
                Upload
              </button>
            </div>
          </form>

          {/* List of Opportunities */}
          <h3 className="mb-3">All Opportunities</h3>
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Role</th>
                <th>Company</th>
                <th>Type</th>
                <th>Deadline</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((op) => (
                <tr key={op.opportunityId}>
                  <td>{op.title}</td>
                  <td>{op.companyName}</td>
                  <td>{op.type}</td>
                  <td>{op.deadline}</td>
                  <td>{op.description}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(op.opportunityId)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {opportunities.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No opportunities available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlacementOpportunities;
