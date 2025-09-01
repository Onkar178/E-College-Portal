using System;
using System.Collections.Generic;

namespace AdminService.Models;

public partial class CourseMaterial
{
    public int MaterialId { get; set; }

    public int? CourseId { get; set; }

    public string Title { get; set; } = null!;

    public byte[]? Notes { get; set; }

    public byte[]? Videos { get; set; }

    public DateTime UploadedAt { get; set; }

    public virtual Course? Course { get; set; }
}
