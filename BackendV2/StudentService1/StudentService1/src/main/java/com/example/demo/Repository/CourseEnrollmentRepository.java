package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.CourseEnrollment;

@Repository
public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Integer> {
	List<CourseEnrollment> findByStudentSid(int sid);
	boolean existsByStudent_SidAndCourse_CourseId(int sid, int courseId);
}
