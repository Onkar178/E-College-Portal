package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.CourseMaterial;
import com.example.demo.entity.CourseMaterialResponseDTO;
import com.example.demo.service.CourseMaterialService;

@RestController
@RequestMapping("/staff/material")
//@CrossOrigin(origins = "*") // Optional: enable CORS for frontend
public class CourseMaterialController {

    @Autowired
    private CourseMaterialService materialService;

    // ✅ Get all course materials (DTO version)
    @GetMapping("/getall")
    public ResponseEntity<List<CourseMaterialResponseDTO>> getAllMaterial() {
        return ResponseEntity.ok(materialService.getAllCourseMaterials());
    }

    // ✅ Upload course material (Staff must be assigned to the course)
    @PostMapping("/upload")
    public ResponseEntity<String> uploadMaterial(
            @RequestParam("title") String title,
            @RequestParam("courseId") int courseId,
            @RequestParam("staffId") int staffId,
            @RequestParam("notes") MultipartFile notes,
            @RequestParam("videos") MultipartFile videos
    ) {
        try {
            CourseMaterial uploaded = materialService.uploadMaterial(title, notes, videos, courseId, staffId);
            return ResponseEntity.ok("Material uploaded successfully with ID: " + uploaded.getMaterialId());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Upload failed: " + e.getMessage());
        }
    }
    
    
//    @GetMapping("/by-course/{courseId}")
//    public ResponseEntity<List<CourseMaterialResponseDTO>> getMaterialsByCourse(@PathVariable int courseId) {
//        List<CourseMaterialResponseDTO> materials = materialService.getMaterialsByCourseId(courseId);
//        return ResponseEntity.ok(materials);
//    }

    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMaterial(@PathVariable int id) {
        materialService.deleteMaterialById(id);
        return ResponseEntity.ok("Material deleted successfully with ID: " + id);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CourseMaterial> updateMaterial(
            @PathVariable int id,
            @RequestBody CourseMaterial updatedMaterial) {
        CourseMaterial updated = materialService.updateMaterial(id, updatedMaterial);
        return ResponseEntity.ok(updated);
    }

}
