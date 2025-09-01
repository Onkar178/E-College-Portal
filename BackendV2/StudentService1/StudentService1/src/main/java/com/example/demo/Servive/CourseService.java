package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.CourseRepository;
import com.example.demo.entity.Course;


@Service
public class CourseService {
	
	@Autowired 
	CourseRepository courseRepository;
	
	public List<Course> getAllCourse(){
		return courseRepository.findAll();
	}
}
