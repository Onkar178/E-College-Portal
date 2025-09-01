using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class Staff
{
    public int StaffId { get; set; }

    public int? Uid { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? AddressLine1 { get; set; }

    public string? AddressLine2 { get; set; }

    public string? Designation { get; set; }

    public int? CityId { get; set; }

    public virtual City? City { get; set; }

    public virtual ICollection<Course> Courses { get; set; } = new List<Course>();

    public virtual User? UidNavigation { get; set; }
}
