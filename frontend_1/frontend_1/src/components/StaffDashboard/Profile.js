import React, { useEffect, useState } from 'react';
import axios from '../../api/staffAxios';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    designation: '',
    cityName: '',
    stateName: '',
  });

  // Fetch profile on load
  useEffect(() => {
    if (!user?.uid) return;

    axios.get(`/staff/uid/${user.uid}`)
      .then((res) => {
        setProfile(res.data);
        setFormData({
          firstName: res.data.firstName || '',
          lastName: res.data.lastName || '',
          addressLine1: res.data.addressLine1 || '',
          addressLine2: res.data.addressLine2 || '',
          designation: res.data.designation || '',
          cityName: res.data.cityName || '',
          stateName: res.data.stateName || '',
        });
      })
      .catch((err) => {
        console.log("No profile found. Initializing blank form.");
        setProfile(null); // For first-time users
        setIsEditing(true);
      });
  }, [user?.uid]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!user?.uid) return;

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      designation: formData.designation,
      cityName: formData.cityName,
      stateName: formData.stateName,
    };

    axios.post(`/staff/profile/${user.uid}`, payload)
      .then(() => {
        alert("Profile saved successfully!");
        setIsEditing(false);
        // Re-fetch to get latest profile
        return axios.get(`/staff/uid/${user.uid}`);
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error("Error saving profile:", err);
        alert("Failed to save profile.");
      });
  };

  const renderForm = () => (
    <div className="w-75 mx-auto">
      {["firstName", "lastName", "designation", "addressLine1", "addressLine2", "cityName", "stateName"].map((field) => (
        <div className="mb-3" key={field}>
          <label className="form-label">{field.replace(/([A-Z])/g, ' $1')}</label>
          <input
            className="form-control"
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}

      <button className="btn btn-success me-2" onClick={handleSave}>
        Save
      </button>
      {profile && (
        <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      )}
    </div>
  );

  const renderProfile = () => (
    <table className="table table-bordered w-75 mx-auto shadow-sm">
      <tbody>
        <tr><th>Full Name</th><td>{profile.firstName} {profile.lastName}</td></tr>
        <tr><th>Designation</th><td>{profile.designation}</td></tr>
        <tr><th>Address Line 1</th><td>{profile.addressLine1}</td></tr>
        <tr><th>Address Line 2</th><td>{profile.addressLine2}</td></tr>
        <tr><th>City</th><td>{profile.cityName}</td></tr>
        <tr><th>State</th><td>{profile.stateName}</td></tr>
      </tbody>
    </table>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-primary">👤 Staff Profile</h3>
        {!isEditing && (
          <button className="btn btn-success" onClick={() => setIsEditing(true)}>
            <i className="bi bi-pencil-fill me-1"></i> Update Profile
          </button>
        )}
      </div>

      {isEditing ? renderForm() : profile ? renderProfile() : <p>No profile found.</p>}
    </div>
  );
};

export default Profile;
