using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class User
{
    public int Uid { get; set; }

    public string Uname { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PhoneNo { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int? Rid { get; set; }

    public virtual Role? RidNavigation { get; set; }

    public virtual ICollection<Staff> Staff { get; set; } = new List<Staff>();

    public virtual ICollection<Student> Students { get; set; } = new List<Student>();
}
