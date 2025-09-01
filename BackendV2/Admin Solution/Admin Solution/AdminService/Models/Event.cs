using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class Event
{
    public int EventId { get; set; }

    public string EventName { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateTime DateTime { get; set; }

    public virtual ICollection<EventRegistration> EventRegistrations { get; set; } = new List<EventRegistration>();
}
