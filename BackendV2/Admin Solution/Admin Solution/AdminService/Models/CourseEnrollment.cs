using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class CourseEnrollment
{
    public int EnrollId { get; set; }

    public int? CourseId { get; set; }

    public int? Sid { get; set; }

    public DateTime StartDate { get; set; }

    public DateTime EndDate { get; set; }

    public string Target { get; set; } = null!;

    public virtual Course? Course { get; set; }

    public virtual Student? SidNavigation { get; set; }
}
