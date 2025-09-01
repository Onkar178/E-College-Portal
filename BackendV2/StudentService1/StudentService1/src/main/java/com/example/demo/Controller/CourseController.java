package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.CourseService;
import com.example.demo.entity.Course;


@RestController
@RequestMapping("/student/course")
public class CourseController {

	@Autowired 
	CourseService courseService;
	
	@GetMapping("/getAllCourses")
	public List<Course> getAllCourse(){
		return courseService.getAllCourse();
	}
}
