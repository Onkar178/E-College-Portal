package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Course;
import com.example.demo.repository.CourseRepository;

@Service
public class CourseSevice {
	
	@Autowired
	CourseRepository courseRepo;
	
	public List<Course> getCoursesByStaffId(int staffId) {
        return courseRepo.findByStaff_StaffId(staffId);
    }
}
