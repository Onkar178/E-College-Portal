package com.example.demo.entity;

import java.util.Arrays;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "course_material")
public class CourseMaterial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "material_id")
    private int materialId;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    @JsonIgnoreProperties("courseMaterials")
    private Course course;

    @Column(name = "title", nullable = false, length = 255)
    private String title;

    @Lob
    @JsonIgnore
    @Column(name = "notes", nullable = false, columnDefinition = "LONGBLOB")
    private byte[] notes;

    @Lob
    @JsonIgnore
    @Column(name = "videos", nullable = false, columnDefinition = "LONGBLOB")
    private byte[] videos;

    // ✅ New field: uploaded_at
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "uploaded_at", nullable = false)
    private Date uploadedAt;

    // --- Constructors ---
    public CourseMaterial() {
        super();
    }

    public CourseMaterial(int materialId, Course course, String title, byte[] notes, byte[] videos, Date uploadedAt) {
        super();
        this.materialId = materialId;
        this.course = course;
        this.title = title;
        this.notes = notes;
        this.videos = videos;
        this.uploadedAt = uploadedAt;
    }

    // --- Getters and Setters ---
    public int getMaterialId() {
        return materialId;
    }

    public void setMaterialId(int materialId) {
        this.materialId = materialId;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getNotes() {
        return notes;
    }

    public void setNotes(byte[] notes) {
        this.notes = notes;
    }

    public byte[] getVideos() {
        return videos;
    }

    public void setVideos(byte[] videos) {
        this.videos = videos;
    }

    public Date getUploadedAt() {
        return uploadedAt;
    }

    public void setUploadedAt(Date uploadedAt) {
        this.uploadedAt = uploadedAt;
    }

    // --- ToString (excluding binary data for readability) ---
    @Override
    public String toString() {
        return "CourseMaterial [materialId=" + materialId + ", course=" + course + ", title=" + title
                + ", uploadedAt=" + uploadedAt + "]";
    }
}
