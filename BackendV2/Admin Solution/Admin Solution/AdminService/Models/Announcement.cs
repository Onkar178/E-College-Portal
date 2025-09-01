using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class Announcement
{
    public int NoticeId { get; set; }

    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateTime? ExpiryDate { get; set; }
}
