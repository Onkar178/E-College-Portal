using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class Feedback
{
    public int ReviewId { get; set; }

    public int? Sid { get; set; }

    public string FeedbackType { get; set; } = null!;

    public sbyte Rating { get; set; }

    public string? Comments { get; set; }

    public virtual Student? SidNavigation { get; set; }
}
