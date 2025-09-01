package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="course")
public class Course {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id", nullable = false)
    private int courseId;

    @Column(name = "course_name", nullable = false, length = 255)
    private String courseName;

    @Column(name = "description", nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;
    
    @ManyToOne
    @JoinColumn(name = "staff_id") // FK column in 'course' table
    @JsonIgnore
    private Staff staff;
    
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
//    @JsonIgnoreProperties({"course", "student"}) // ignore both sides
    @JsonManagedReference("course-enrollment")
    private Set<CourseEnrollment> courseEnrollment;




	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Course(int courseId, String courseName, String description, LocalDateTime startDate, LocalDateTime endDate,
			Staff staff, Set<CourseEnrollment> courseEnrollment) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.staff = staff;
		this.courseEnrollment = courseEnrollment;
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


	public Set<CourseEnrollment> getEnrolledCourse() {
		return courseEnrollment;
	}


	public void setEnrolledCourse(Set<CourseEnrollment> courseEnrollment) {
		this.courseEnrollment = courseEnrollment;
	}


	public Staff getStaff() {
		return staff;
	}


	public void setStaff(Staff staff) {
		this.staff = staff;
	}


	public Set<CourseEnrollment> getCourseEnrollment() {
		return courseEnrollment;
	}


	public void setCourseEnrollment(Set<CourseEnrollment> courseEnrollment) {
		this.courseEnrollment = courseEnrollment;
	}
    
    
}
