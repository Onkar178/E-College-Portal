using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class PlacementApplication
{
    public int ApplicationId { get; set; }

    public int? OpportunityId { get; set; }

    public int? Sid { get; set; }

    public byte[] Resume { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual PlacementDatum? Opportunity { get; set; }

    public virtual Student? SidNavigation { get; set; }
}
