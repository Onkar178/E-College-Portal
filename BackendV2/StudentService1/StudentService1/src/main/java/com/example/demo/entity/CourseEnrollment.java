package com.example.demo.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="course_enrollment")
public class CourseEnrollment {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "enroll_id", nullable = false)
    private int enrollId;

	@ManyToOne
	@JoinColumn(name = "sid", nullable = false)
//	@JsonIgnoreProperties({"courseEnrollment", "registeredEvents"}) // ignore lists
	@JsonBackReference("student-enrollment")
	private Student student;

	@ManyToOne
	@JoinColumn(name = "course_id", nullable = false)
//	@JsonIgnoreProperties({"courseEnrollment"}) // ignore back list
	@JsonBackReference("course-enrollment")
	private Course course;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "end_date", nullable = false)
    private LocalDateTime endDate;
    
    @Column(name = "target", nullable = false)
    private String target;

	public CourseEnrollment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseEnrollment(int enrollId, Student student, Course course, LocalDateTime startDate, LocalDateTime endDate,
			String target) {
		super();
		this.enrollId = enrollId;
		this.student = student;
		this.course = course;
		this.startDate = startDate;
		this.endDate = endDate;
		this.target = target;
	}

	public int getEnrollId() {
		return enrollId;
	}

	public void setEnrollId(int enrollId) {
		this.enrollId = enrollId;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
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
