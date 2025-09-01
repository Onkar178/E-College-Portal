package com.example.demo.entity;

public class CourseMaterialResponseDTO {
    private  int materialId;
    private String title;
    private String notesName;
    private String videosName;
    private CourseDTO course;
	public int getMaterialId() {
		return materialId;
	}
	public void setMaterialId(int materialId) {
		this.materialId = materialId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getNotesName() {
		return notesName;
	}
	public void setNotesName(String notesName) {
		this.notesName = notesName;
	}
	public String getVideosName() {
		return videosName;
	}
	public void setVideosName(String videosName) {
		this.videosName = videosName;
	}
	public CourseDTO getCourse() {
		return course;
	}
	public void setCourse(CourseDTO course) {
		this.course = course;
	}
	
    
	
    
}
