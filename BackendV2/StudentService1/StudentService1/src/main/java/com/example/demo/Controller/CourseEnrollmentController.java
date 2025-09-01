package com.example.demo.Controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.CourseEnrollmentRepository;
import com.example.demo.Repository.CourseRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.Servive.CourseEnrollmentService;
import com.example.demo.dto.CourseDTO;
import com.example.demo.dto.CourseEnrollmentRequest;
import com.example.demo.entity.Course;
import com.example.demo.entity.CourseEnrollment;
import com.example.demo.entity.Student;

@RestController
@RequestMapping("/student/courseEnrollment")
public class CourseEnrollmentController {

	 @Autowired
	    private CourseEnrollmentService courseEnrollmentService;

	 
	 @Autowired
	    private CourseEnrollmentRepository courseEnrollmentRepository;
	 @Autowired
	    private StudentRepository studentRepository;

	    @Autowired
	    private CourseRepository courseRepository;
	    

	        // ✅ Enroll a student in a course (matches frontend request)
	    @PostMapping("/enroll")
	    public ResponseEntity<String> enrollStudent(
	            @RequestParam int uid,
	            @RequestParam int courseId) {

	        // Find student by UID
	        Student student = studentRepository.findByUid(uid)
	                .orElseThrow(() -> new RuntimeException("Student not found for uid: " + uid));

	        // Find course by ID
	        Course course = courseRepository.findById(courseId)
	                .orElseThrow(() -> new RuntimeException("Course not found for id: " + courseId));

	        // Check if already enrolled
	        boolean alreadyEnrolled = courseEnrollmentRepository
	                .existsByStudent_SidAndCourse_CourseId(student.getSid(), courseId);
	        if (alreadyEnrolled) {
	            return ResponseEntity.badRequest().body("You are already enrolled in this course.");
	        }

	        // Create enrollment
	        CourseEnrollment enrollment = new CourseEnrollment();
	        enrollment.setStudent(student);
	        enrollment.setCourse(course);

	        // Required fields
	        enrollment.setStartDate(LocalDateTime.now());
	        enrollment.setEndDate(LocalDateTime.now().plusMonths(3)); // Example: course lasts 3 months
	        enrollment.setTarget("Complete this course successfully"); // Example target

	        // Save enrollment
	        courseEnrollmentRepository.save(enrollment);

	        return ResponseEntity.ok("Enrollment successful for course: " + course.getCourseName());
	    }


	        // ✅ Get all enrolled courses for a student
	        @GetMapping("/student/{sid}")
	        public List<CourseDTO> getEnrolledCoursesForStudent(@PathVariable int sid) {
	            return courseEnrollmentService.getEnrolledCoursesForStudent(sid);
	        }
	    }


