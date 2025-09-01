import React, { useEffect, useState } from "react";
import adminAxios from "../../api/adminAxios"; // Axios instance for AdminService

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await adminAxios.get("/Admin/GetAllFeedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-5">Loading feedback...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Review ID</th>
              <th>Student ID</th>
              <th>Feedback Type</th>
              <th>Rating</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.reviewId}>
                <td>{fb.reviewId}</td>
                <td>{fb.sid}</td>
                <td>{fb.feedbackType}</td>
                <td>{fb.rating}</td>
                <td>{fb.comments || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Feedback;
