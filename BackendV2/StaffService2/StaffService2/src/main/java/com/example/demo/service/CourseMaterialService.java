package com.example.demo.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Course;
import com.example.demo.entity.CourseDTO;
import com.example.demo.entity.CourseMaterial;
import com.example.demo.entity.CourseMaterialResponseDTO;
import com.example.demo.repository.CourseMaterialRepository;
import com.example.demo.repository.CourseRepository;

@Service
public class CourseMaterialService {
	
	@Autowired
	CourseMaterialRepository materialRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	
	public List<CourseMaterial> getall(){
		return materialRepository.findAll();
	}
	
	public CourseMaterial uploadMaterial(String title, MultipartFile notesFile, MultipartFile videoFile, int courseId, int staffId) throws IOException {
	    Course course = courseRepository.findById(courseId)
	        .orElseThrow(() -> new RuntimeException("Course not found"));

	    // ✅ Authorization Check
	    if (course.getStaff() == null || course.getStaff().getStaffId() != staffId) {
	        throw new RuntimeException("You are not authorized to upload for this course.");
	    }

	    CourseMaterial material = new CourseMaterial();
	    material.setTitle(title);
	    material.setNotes(notesFile.getBytes());
	    material.setVideos(videoFile.getBytes());
	    material.setCourse(course);
	    material.setUploadedAt(new java.util.Date()); // Set the current time

	    return materialRepository.save(material);
	}

	
	public List<CourseMaterialResponseDTO> getAllCourseMaterials() {
	    List<CourseMaterial> materials = materialRepository.findAll();
	    return materials.stream().map(material -> {
	        CourseMaterialResponseDTO dto = new CourseMaterialResponseDTO();
	        dto.setMaterialId(material.getMaterialId());
	        dto.setTitle(material.getTitle());
	        dto.setNotesName("notes.pdf"); // Optional: fetch original file name if saved
	        dto.setVideosName("lecture.mp4");

	        CourseDTO courseDTO = new CourseDTO();
	        courseDTO.setCourseId(material.getCourse().getCourseId());
	        courseDTO.setCourseName(material.getCourse().getCourseName());

	        dto.setCourse(courseDTO);
	        return dto;
	    }).collect(Collectors.toList());
	}
	
	
	
	public void deleteMaterialById(int id) {
	    if (!materialRepository.existsById(id)) {
	        throw new RuntimeException("Material with ID " + id + " does not exist.");
	    }
	    materialRepository.deleteById(id);
	}
	
	

//
//	public List<CourseMaterialResponseDTO> getMaterialsByCourseId(int courseId) {
//	    List<CourseMaterial> materials = materialRepo.findByCourse_CourseId(courseId);
//
//	    List<CourseMaterialResponseDTO> dtos = new ArrayList<>();
//	    for (CourseMaterial material : materials) {
//	        CourseMaterialResponseDTO dto = new CourseMaterialResponseDTO();
//	        dto.setMaterialId(material.getMaterialId());
//	        dto.setTitle(material.getTitle());
//	        dto.setCourseName(material.getCourse().getCourseName());
//	        dto.setStaffName(material.getStaff().getFirstName() + " " + material.getStaff().getLastName());
//	        dto.setNotesAvailable(material.getNotes() != null);
//	        dto.setVideoAvailable(material.getVideos() != null);
//	        dtos.add(dto);
//	    }
//
//	    return dtos;
//	}


	
	public CourseMaterial updateMaterial(int id, CourseMaterial updatedData) {
	    CourseMaterial existing = materialRepository.findById(id)
	        .orElseThrow(() -> new RuntimeException("Material not found with ID " + id));

	    // You can update more fields if needed
	    existing.setTitle(updatedData.getTitle());

	    return materialRepository.save(existing);
	}


}
