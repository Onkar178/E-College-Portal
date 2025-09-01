import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const [staffName, setStaffName] = useState('');

  useEffect(() => {
    if (user?.uid) {
      axios.get(`http://localhost:8082/staff/uid/${user.uid}`)
        .then((res) => {
          const staff = res.data;
          setStaffName(`${staff.firstName} ${staff.lastName}`);
        })
        .catch((err) => {
          console.error("Error fetching staff:", err);
        });
    }
  }, [user?.uid]);

  return (
    <div className="bg-light p-5 rounded shadow-sm" style={{ backgroundColor: '#e6f2ff' }}>
      <h2 className="text-primary mb-3"> Welcome, {staffName || "Staff"}!</h2>
      <p className="lead text-dark">
        This is your dashboard home. Use the sidebar to navigate your profile, upload course materials, and post announcements.
      </p>
      <hr />
      <p className="text-muted">Tip: Keep your profile up-to-date and check announcements regularly.</p>
    </div>
  );
};

export default Home;
