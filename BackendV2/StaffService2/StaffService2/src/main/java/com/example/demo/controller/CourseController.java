package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Course;
import com.example.demo.service.CourseSevice;

@RestController
@RequestMapping("/course")
public class CourseController {

	@Autowired
	CourseSevice courseService;
	
	@GetMapping("/by-staff/{staffId}")
    public ResponseEntity<List<Course>> getCoursesByStaff(@PathVariable int staffId) {
        List<Course> courses = courseService.getCoursesByStaffId(staffId);
        return ResponseEntity.ok(courses);
    }
}
