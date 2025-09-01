// // src/components/StaffDashboard/Announcements.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Announcements = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [announcements, setAnnouncements] = useState([]);

//   // Fetch announcements on load
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   const fetchAnnouncements = () => {
//     axios.get('http://localhost:8082/staff/announcement/all')
//       .then(res => setAnnouncements(res.data))
//       .catch(err => console.error("Error fetching announcements", err));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !description || !expiryDate) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const payload = {
//       title,
//       description,
//       expiry_date: expiryDate + "T00:00:00"
//     };

//     axios.post('http://localhost:8082/staff/announcement/add', payload)
//       .then(res => {
//         alert("Announcement posted!");
//         setTitle('');
//         setDescription('');
//         setExpiryDate('');
//         fetchAnnouncements(); // refresh list
//       })
//       .catch(err => {
//         console.error("Failed to post announcement", err);
//         alert("Error posting announcement");
//       });
//   };

//   return (
//     <div>
//       <h2>Post New Announcement</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label><br />
//           <input
//             type="text"
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label><br />
//           <textarea
//             value={description}
//             onChange={e => setDescription(e.target.value)}
//             rows="4"
//             required
//           />
//         </div>
//         <div>
//           <label>Expiry Date:</label><br />
//           <input
//             type="date"
//             value={expiryDate}
//             onChange={e => setExpiryDate(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" style={{ marginTop: '10px' }}>Post Announcement</button>
//       </form>

//       <hr />

//       <h3>All Announcements</h3>
//       {announcements.length === 0 ? (
//         <p>No announcements found.</p>
//       ) : (
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Expiry Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {announcements.map((a) => (
//               <tr key={a.noticeId}>
//                 <td>{a.noticeId}</td>
//                 <td>{a.title}</td>
//                 <td>{a.description}</td>
//                 <td>{a.expiry_date?.split("T")[0]}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Announcements;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios
      .get('http://localhost:8082/staff/announcement/all')
      .then(res => setAnnouncements(res.data))
      .catch(err => console.error("Error fetching announcements", err));
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setExpiryDate('');
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !expiryDate) {
      alert("Please fill in all fields.");
      return;
    }

    const payload = {
      title,
      description,
      expiry_date: expiryDate + "T00:00:00",
    };

    if (editingId !== null) {
      // PUT update
      axios
        .put(`http://localhost:8082/staff/announcement/update/${editingId}`, payload)
        .then(() => {
          alert("Announcement updated!");
          resetForm();
          fetchAnnouncements();
        })
        .catch(err => {
          console.error("Failed to update announcement", err);
          alert("Error updating announcement");
        });
    } else {
      // POST new
      axios
        .post('http://localhost:8082/staff/announcement/add', payload)
        .then(() => {
          alert("Announcement posted!");
          resetForm();
          fetchAnnouncements();
        })
        .catch(err => {
          console.error("Failed to post announcement", err);
          alert("Error posting announcement");
        });
    }
  };

  const handleEdit = (announcement) => {
    setEditingId(announcement.noticeId);
    setTitle(announcement.title);
    setDescription(announcement.description);
    setExpiryDate(announcement.expiry_date.split("T")[0]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      axios
        .delete(`http://localhost:8082/staff/announcement/delete/${id}`)
        .then(() => {
          alert("Announcement deleted.");
          fetchAnnouncements();
        })
        .catch((err) => {
          console.error("Failed to delete announcement", err);
          alert("Error deleting announcement");
        });
    }
  };

  return (
    <div className="container mt-4">
      <div className="bg-light p-4 rounded shadow-sm border">
        <h2 className="text-primary mb-4">
          📢 {editingId ? "Edit Announcement" : "Post New Announcement"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter announcement title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Expiry Date</label>
            <input
              type="date"
              className="form-control"
              value={expiryDate}
              onChange={e => setExpiryDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Update Announcement" : "Post Announcement"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      <hr className="my-5" />

      <h3 className="text-primary mb-3">📋 All Announcements</h3>

      {announcements.length === 0 ? (
        <p className="text-muted">No announcements found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-primary text-center">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Expiry Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((a) => (
                <tr key={a.noticeId}>
                  <td className="text-center">{a.noticeId}</td>
                  <td>{a.title}</td>
                  <td>{a.description}</td>
                  <td className="text-center">{a.expiry_date?.split("T")[0]}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(a)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(a.noticeId)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Announcements;


