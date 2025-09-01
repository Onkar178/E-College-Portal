import React from 'react';
import '../AboutModal.css';

const AboutModal = () => {
  return (
    <div
      className="modal fade"
      id="aboutModal"
      tabIndex="-1"
      aria-labelledby="aboutModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 shadow-lg border-0">
          <div className="modal-header custom-modal-header">
            <h5 className="modal-title fw-bold" id="aboutModalLabel">
              About E-College Portal
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body p-4">
            <p className="mb-0 fs-6 text-secondary">
              The <strong>E-College Portal</strong> is your one-stop digital gateway for managing academic life.
              Students can access courses, register for events, track placements, and connect with faculty.
              Staff and administrators can manage academic records, schedules, and campus activities.
              Designed with ease of use in mind, the portal brings everything you need for smarter, faster,
              and more connected learning — all in one place.
            </p>
          </div>

          <div className="modal-footer border-0">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;

