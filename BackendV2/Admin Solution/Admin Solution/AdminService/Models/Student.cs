using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class Student
{
    public int Sid { get; set; }

    public int? Uid { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string AddressLine1 { get; set; } = null!;

    public string AddressLine2 { get; set; } = null!;

    public int? CityId { get; set; }

    public virtual City? City { get; set; }

    public virtual ICollection<CourseEnrollment> CourseEnrollments { get; set; } = new List<CourseEnrollment>();

    public virtual ICollection<EventRegistration> EventRegistrations { get; set; } = new List<EventRegistration>();

    public virtual ICollection<Feedback> Feedbacks { get; set; } = new List<Feedback>();

    public virtual ICollection<PlacementApplication> PlacementApplications { get; set; } = new List<PlacementApplication>();

    public virtual User? UidNavigation { get; set; }
}
