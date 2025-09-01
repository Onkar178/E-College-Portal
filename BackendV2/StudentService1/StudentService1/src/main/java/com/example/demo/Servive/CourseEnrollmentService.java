package com.example.demo.Servive;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.CourseEnrollmentRepository;
import com.example.demo.Repository.CourseRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.dto.CourseDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.CourseEnrollment;
import com.example.demo.entity.Student;

@Service
public class CourseEnrollmentService {

	@Autowired
	CourseEnrollmentRepository courseEnrollmentRepository;
	
	@Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public String enrollStudentInCourse(int sid, int courseId, LocalDateTime startDate, LocalDateTime endDate, String target) {
        // Check if student exists
        Student student = studentRepository.findById(sid)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        // Check if course exists
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        // Prevent duplicate enrollment
        if (courseEnrollmentRepository.existsByStudent_SidAndCourse_CourseId(sid, courseId)) {
            return "Student is already enrolled in this course";
        }

        // Create enrollment
        CourseEnrollment enrollment = new CourseEnrollment();
        enrollment.setStudent(student);
        enrollment.setCourse(course);
        enrollment.setStartDate(startDate);
        enrollment.setEndDate(endDate);
        enrollment.setTarget(target);

        courseEnrollmentRepository.save(enrollment);
        return "Student enrolled in course successfully";
    }

    public List<CourseDTO> getEnrolledCoursesForStudent(int sid) {
        List<CourseEnrollment> enrollments = courseEnrollmentRepository.findByStudentSid(sid);

        return enrollments.stream()
                .map(enroll -> new CourseDTO(
                        enroll.getCourse().getCourseId(),
                        enroll.getCourse().getCourseName(),
                        enroll.getCourse().getDescription(),
                        enroll.getStartDate(),
                        enroll.getEndDate(),
                        enroll.getTarget()
                ))
                .toList();
    }
    
    
    
}
