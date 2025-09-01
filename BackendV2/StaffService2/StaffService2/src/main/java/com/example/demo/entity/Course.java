package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "course")
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

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private Set<CourseMaterial> courseMaterials;

    // ✅ New staff relation
 
    @ManyToOne
    @JoinColumn(name = "staff_id") // FK column in 'course' table
    @JsonIgnore
    private Staff staff;

    // 🔧 Constructors
    public Course() {
        super();
    }

    public Course(int courseId, String courseName, String description, LocalDateTime startDate, LocalDateTime endDate,
                  Set<CourseMaterial> courseMaterials, Staff staff) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.courseMaterials = courseMaterials;
        this.staff = staff;
    }

    // 🔧 Getters & Setters

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

    public Set<CourseMaterial> getCourseMaterials() {
        return courseMaterials;
    }

    public void setCourseMaterials(Set<CourseMaterial> courseMaterials) {
        this.courseMaterials = courseMaterials;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setStaff(Staff staff) {
        this.staff = staff;
    }

    @Override
    public String toString() {
        return "Course [courseId=" + courseId + ", courseName=" + courseName + ", description=" + description
                + ", startDate=" + startDate + ", endDate=" + endDate + ", courseMaterials=" + courseMaterials
                + ", staff=" + (staff != null ? staff.getStaffId() : "null") + "]";
    }
}
