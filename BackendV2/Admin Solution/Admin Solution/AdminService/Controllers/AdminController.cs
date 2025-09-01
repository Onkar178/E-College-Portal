using AdminService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace AdminService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly P15EcollegeportalContext _context;

        public AdminController(P15EcollegeportalContext context)
        {
            _context = context;
        }

        //[HttpGet]
        //public IActionResult GetAllUsers()
        //{
        //    var users = _context.Users.ToList(); // Assuming 'sUsers' is your DbSet name
        //    return Ok(users);
        //}


        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _context.Users
                .Include(u => u.RidNavigation)
                .Select(u => new UserDTO
                {
                    Uid = u.Uid,
                    Uname = u.Uname,
                    Email = u.Email,
                    PhoneNo = u.PhoneNo,
                    RoleName = u.RidNavigation != null ? u.RidNavigation.Rname : "N/A"
                })
                .ToList();

            return Ok(users);
        }



        [HttpGet]
        public IActionResult GetAllCourses()
        {
            var courses = _context.Courses
                .Select(c => new
                {
                    c.CourseId,
                    c.CourseName,
                    c.Description,
                    c.StartDate,
                    c.EndDate,
                    StaffId = c.StaffId,
                    StaffName = c.Staff != null ? c.Staff.FirstName + " " + c.Staff.LastName : null
                })
                .ToList();

            return Ok(courses);
        }

        [HttpGet]
        public IActionResult GetAllFeedback()
        {
            try
            {
                var feedbackList = _context.Feedbacks
                    .Select(f => new
                    {
                        f.ReviewId,
                        f.Sid,
                        f.FeedbackType,
                        f.Rating,
                        f.Comments,
                        StudentName = f.SidNavigation != null
                            ? f.SidNavigation.FirstName + " " + f.SidNavigation.LastName
                            : null
                    })
                    .ToList();

                return Ok(feedbackList);
            }
            catch (Exception ex)
            {
                // Log the full exception details
                Console.WriteLine("Error retrieving feedback:");
                Console.WriteLine(ex.ToString());

                return StatusCode(StatusCodes.Status500InternalServerError,
                    $"Error retrieving feedback: {ex.Message}");
            }
        }



        [HttpDelete("{uid}")]
        public IActionResult DeleteStaffUser(int uid)
        {
            var user = _context.Users.FirstOrDefault(u => u.Uid == uid && u.Rid == 2); // 2 = staff role
            if (user == null)
            {
                return NotFound("Staff user not found.");
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return Ok($"Staff user with UID {uid} deleted successfully.");
        }




      


        [HttpGet]
        [Route("GetAllStaff")]
        public IActionResult GetAllStaff()
        {
            var staffList = _context.Staff
                .Select(s => new
                {
                    StaffId = s.StaffId,
                    StaffName = s.FirstName + " " + s.LastName
                })
                .ToList();

            return Ok(staffList);
        }




        // New POST endpoint to assign staff by name to course
        [HttpPost]
        [Route("AssignStaffToCourseByName")]
        public IActionResult AssignStaffToCourseByName([FromBody] AssignStaffToCourseDTO dto)
        {
            var course = _context.Courses.FirstOrDefault(c => c.CourseId == dto.CourseId);
            if (course == null)
            {
                return NotFound($"Course with ID {dto.CourseId} not found.");
            }

            // Bring staff to memory and do case-insensitive compare
            var staff = _context.Staff
                .AsEnumerable()  // Move to in-memory (not efficient for large sets)
                .FirstOrDefault(s => string.Equals(s.FirstName + " " + s.LastName, dto.StaffName, StringComparison.OrdinalIgnoreCase));

            if (staff == null)
            {
                return NotFound($"Staff with name '{dto.StaffName}' not found.");
            }

            if (course.StaffId != null)
            {
                return BadRequest($"This course is already assigned to a staff member (StaffId: {course.StaffId}).");
            }

            // Assign the staff to the course
            course.StaffId = staff.StaffId;
            _context.SaveChanges();

            return Ok($"Staff '{dto.StaffName}' assigned to course (ID: {dto.CourseId}) successfully.");
        }


        [HttpPost]
        public IActionResult CreateCourse([FromBody] CreateCourseDTO dto)
        {
            if (dto == null || string.IsNullOrWhiteSpace(dto.CourseName))
                return BadRequest("Course name is required.");

            var course = new Course
            {
                CourseName = dto.CourseName,
                Description = dto.Description,
                StartDate = dto.StartDate,
                EndDate = dto.EndDate
            };

            _context.Courses.Add(course);
            _context.SaveChanges();

            return Ok(new { Message = "Course created successfully", CourseId = course.CourseId });
        }


        [HttpPost]
        public async Task<IActionResult> CreateStaffLogin([FromBody] UserRegisterStaffDTO dto)
        {
            if (_context.Users.Any(u => u.Email == dto.Email))
            {
                return BadRequest("Email already exists.");
            }

            // Create user with role = 2
            var user = new User
            {
                Uname = dto.Uname,
                Email = dto.Email,
                PhoneNo = dto.PhoneNo,
                Password = dto.Password,
                Rid = 2 // staff role ID
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            // 🔄 Call Spring Boot staff-service to initialize staff profile
            var staffInitDto = new StaffInitDTO { Uid = user.Uid };

            using (var httpClient = new HttpClient())
            {
                var staffServiceUrl = "http://localhost:8081/staff/add"; // replace with correct port/path
                var response = await httpClient.PostAsJsonAsync(staffServiceUrl, staffInitDto);

                if (!response.IsSuccessStatusCode)
                {
                    // You might want to roll back the user creation here if needed
                    return StatusCode((int)response.StatusCode, "User created, but failed to initialize staff profile.");
                }
            }

            return Ok(new
            {
                Message = "Staff user created successfully",
                Uid = user.Uid,
                Email = user.Email,
                RoleId = user.Rid
            });
        }

    }
}
