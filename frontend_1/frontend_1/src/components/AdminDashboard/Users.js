import React, { useEffect, useState } from "react";
import adminAxios from "../../api/adminAxios"; // Axios instance for AdminService

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  // Staff creation form state
  const [formData, setFormData] = useState({
    uname: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const [creatingStaff, setCreatingStaff] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await adminAxios.get("/Admin/GetAllUsers"); // Use relative path here since baseURL is set
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoadingUsers(false);
    }
  };

  // Handle staff form input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle staff creation form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setCreatingStaff(true);
    setMessage("");

    try {
      const payload = {
        Uname: formData.uname,
        Email: formData.email,
        PhoneNo: formData.phoneNo,
        Password: formData.password,
      };

      const response = await adminAxios.post("/Admin/CreateStaffLogin", payload);
      setMessage(response.data.message || "Staff user created successfully!");
      setFormData({
        uname: "",
        email: "",
        phoneNo: "",
        password: "",
        confirmPassword: "",
      });
      fetchUsers(); // Refresh user list after new staff created
    } catch (error) {
      setMessage(error.response?.data || error.message || "Creation failed.");
    } finally {
      setCreatingStaff(false);
    }
  };

  return (
    <div className="container mt-4">
      {/* Users List */}
      <h2 className="mb-3">All Users</h2>
      {loadingUsers ? (
        <p className="text-center mt-5">Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>UID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.uname}</td>
                <td>{user.email}</td>
                <td>{user.phoneNo}</td>
                <td>{user.roleName}</td> {/* Display role name */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Divider */}
      <hr className="my-5" />

      {/* Create Staff User Form */}
      <h3>Create Staff User</h3>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="uname" className="form-label">User Name</label>
          <input
            type="text"
            id="uname"
            name="uname"
            className="form-control"
            value={formData.uname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNo" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            className="form-control"
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={creatingStaff}>
          {creatingStaff ? "Creating..." : "Create Staff User"}
        </button>
      </form>

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
};

export default Users;
