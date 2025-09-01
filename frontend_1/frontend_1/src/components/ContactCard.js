

// src/components/ContactCard.js
import React from "react";

const ContactCard = () => {
  return (
    <div
      className="contact-card  shadow rounded p-3 animate-dropdown"
      style={{
        backgroundColor: "#fff",
        width: "300px",
        position: "absolute",
        // top: "100%",
        top: "calc(100% + 30px)",

        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1050,
        borderRadius: "12px",
       
      }}
    >
      <h6 className="fw-bold mb-3" style={{ color: "#87CEFA" }}>Contact Us</h6>
      <p className="mb-1"><strong>📍 Address:</strong> 123 College Road, Knowledge City</p>
      <p className="mb-1"><strong>📞 Phone:</strong> +91 98765 43210</p>
      <p className="mb-1"><strong>📧 Email:</strong> support@ecollegeportal.com</p>
      <p className="small text-muted mb-0">Available Mon–Fri, 9:00 AM – 5:00 PM</p>
    </div>
  );
};

export default ContactCard;
