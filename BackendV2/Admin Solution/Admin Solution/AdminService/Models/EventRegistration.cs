using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class EventRegistration
{
    public int RegId { get; set; }

    public int? EventId { get; set; }

    public int? Sid { get; set; }

    public virtual Event? Event { get; set; }

    public virtual Student? SidNavigation { get; set; }
}
