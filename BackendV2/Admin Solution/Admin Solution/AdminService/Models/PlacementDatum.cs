using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class PlacementDatum
{
    public int OpportunityId { get; set; }

    public string Title { get; set; } = null!;

    public string CompanyName { get; set; } = null!;

    public string Type { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateTime Deadline { get; set; }

    public virtual ICollection<PlacementApplication> PlacementApplications { get; set; } = new List<PlacementApplication>();
}
