import React, { useEffect, useState } from "react";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/student/announcements/active")
      .then(response => {
        setAnnouncements(response.data);
      })
      .catch(error => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <div>
      <h3 className="mb-4">📢 Announcements</h3>
      {announcements.length === 0 ? (
        <p className="text-muted">No active announcements available.</p>
      ) : (
        <div className="list-group">
          {announcements.map((a) => (
            <div
              key={a.noticeId}
              className="list-group-item list-group-item-action mb-2 shadow-sm rounded"
            >
              <h5>{a.title}</h5>
              <p>{a.description}</p>
              <small className="text-muted">
                  Expiry Date: {a.expiryDate ? new Date(a.expiryDate).toLocaleDateString() : "N/A"}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcements;
