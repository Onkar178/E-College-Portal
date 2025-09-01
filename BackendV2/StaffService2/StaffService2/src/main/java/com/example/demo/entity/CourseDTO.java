package com.example.demo.entity;

public class CourseDTO {
	 private int courseId;
	 private String courseName;
	 public CourseDTO() {
		super();
		// TODO Auto-generated constructor stub
	 }
	 public CourseDTO(int courseId, String courseName) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
	 }
	 public int getCourseId() {
		 return courseId;
	 }
	 public void setCourseId(int courseId) {
		 this.courseId = courseId;
	 }
	 public String getCourseName() {
		 return courseName;
	 }
	 public void setCourseName(String courseName) {
		 this.courseName = courseName;
	 }
	 
	 
}
