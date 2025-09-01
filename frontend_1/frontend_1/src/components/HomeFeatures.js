
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../HomeFeatures.css';

const HomeFeatures = () => {
  const features = [
    {
      icon: 'bi-book',
      title: 'Enrolled Courses',
      desc: 'Browse and enroll in academic courses.',
      path: '/EnrolledCourses'
    },
    {
      icon: 'bi-calendar-event',
      title: 'Events',
      desc: 'Stay updated with college activities.',
      path: '/student/event'
    },
    {
      icon: 'bi-person-workspace',
      title: 'Student Dashboard',
      desc: 'Manage your profile and academics.',
      path: '/student'
    },
    {
      icon: 'bi-journal-check',
      title: 'Accessed Courses',
      desc: 'Track your registered events.',
      path: '/AccessedCourses'
    },
    {
      icon: 'bi-briefcase',
      title: 'Placement Application',
      desc: 'Apply and prepare for campus placements.',
      path: '/PlacementApplication'
    }
  ];

  return (
    <div className="home-features-container shadow-lg rounded-4 p-4 animate-slide-down bg-white">
      <h5 className="fw-bold mb-3">Explore Our Features</h5>
      <div className="row g-3">
        {features.map((feature, index) => (
          <div className="col-md-6 d-flex align-items-start gap-3" key={index}>
            <i className={`${feature.icon} fs-3 text-primary`}></i>
            <div>
              <h6 className="fw-bold mb-1">
                <Link
                  to={feature.path}
                  className="text-decoration-none text-dark"
                >
                  {feature.title}
                </Link>
              </h6>
              <p className="mb-0 small text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
