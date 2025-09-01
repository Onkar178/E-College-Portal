import React, { useEffect, useState } from "react";
import staffAxios from "../../api/staffAxios";

const PlacementApplications = () => {
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await staffAxios.get("/staff/placements/applications"); // ✅ corrected path
      setApplications(res.data);

      // Extract unique company names
      const uniqueCompanies = [...new Set(res.data.map((app) => app.companyName))];
      setCompanies(uniqueCompanies);
    } catch (err) {
      console.error("Error fetching applications", err);
    }
  };

  const filteredApplications = selectedCompany
    ? applications.filter((app) => app.companyName === selectedCompany)
    : applications;

  return (
    <div className="p-4 shadow rounded bg-white mt-6">
      <h2 className="text-xl font-bold mb-4">Placement Applications</h2>

      {/* Filter by company */}
      <select
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="">All Companies</option>
        {companies.map((company, idx) => (
          <option key={idx} value={company}>
            {company}
          </option>
        ))}
      </select>

      {/* Applications List */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Company</th>
            <th className="border p-2"> Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.applicationId}>
              <td className="border p-2">
                {app.firstName} {app.lastName}
              </td>
              <td className="border p-2">{app.companyName}</td>
              <td className="border p-2">{app.opportunityTitle}</td> {/* ✅ FIXED */}
              <td className="border p-2">{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementApplications;
