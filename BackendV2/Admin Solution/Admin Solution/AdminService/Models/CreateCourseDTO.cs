namespace AdminService.Models
{
    public class CreateCourseDTO
    {
        public string CourseName { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
