package com.example.demo.dto;

import java.time.LocalDateTime;

public class CourseDTO {
	private int courseId;
    private String courseName;
    private String description;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String target;

    public CourseDTO(int courseId, String courseName, String description, LocalDateTime startDate, LocalDateTime endDate, String target) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.target = target;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}
    
    
}
