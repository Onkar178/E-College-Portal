//package com.example.demo.Controller;
//
//import java.io.IOException;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.example.demo.Repository.PlacementApplicationRepository;
//import com.example.demo.Repository.PlacementDataRepository;
//import com.example.demo.Repository.StudentRepository;
//import com.example.demo.Servive.PlacementApplicationService;
//import com.example.demo.entity.PlacementApplication;
//import com.example.demo.entity.PlacementData;
//import com.example.demo.entity.Student;
//
//@RestController
//@RequestMapping("/student/placementApp/")
//public class PlacementApplicationController {
//
//	@Autowired
//    private PlacementApplicationService placementApplicationService;
//
//	@Autowired
//	private PlacementDataRepository placementDataRepository;
//	
//	@Autowired
//	private StudentRepository studentRepository;
//
//	
//	@Autowired
//	PlacementApplicationRepository placementApplicationRepository;
//	
////    @PostMapping("/apply/{sid}/{opportunityId}")
////    public ResponseEntity<String> applyForPlacement(
////            @PathVariable int sid,
////            @PathVariable int opportunityId,
////            @RequestParam("resume") MultipartFile resumeFile) {
////        try {
////            placementApplicationService.applyForPlacement(sid, opportunityId, resumeFile);
////            return ResponseEntity.ok("Application submitted successfully");
////        } catch (RuntimeException e) {
////            // For example, "already applied" or "not found"
////            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
////        } catch (IOException e) {
////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing resume file");
////        }
////    }
//	
//	@PostMapping("/apply/{sid}/{opportunityId}")
//	public ResponseEntity<String> applyForOpportunity(
//	    @PathVariable int sid,
//	    @PathVariable int opportunityId,
//	    @RequestParam("resume") MultipartFile resumeFile) {
//
//	    try {
//	        // 1. Fetch the PlacementData entity by opportunityId
//	        PlacementData placementData = placementDataRepository.findById(opportunityId)
//	            .orElseThrow(() -> new RuntimeException("Opportunity not found"));
//
//	        // 2. Fetch the Student entity by sid
//	        Student student = studentRepository.findById(sid)
//	            .orElseThrow(() -> new RuntimeException("Student not found"));
//
//	        // 3. Create new PlacementApplication
//	        PlacementApplication application = new PlacementApplication();
//	        application.setPlacementData(placementData);
//	        application.setStudent(student);
//	        application.setStatus("Pending");
//
//	        // 4. Set resume bytes
//	        application.setResume(resumeFile.getBytes());
//
//	        // 5. Save application
//	        placementApplicationRepository.save(application);
//
//	        return ResponseEntity.ok("Application submitted successfully.");
//
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit application: " + e.getMessage());
//	    }
//	}
//
//
//    @GetMapping("/student/{sid}")
//    public ResponseEntity<List<PlacementApplication>> getApplicationsForStudent(@PathVariable int sid) {
//        List<PlacementApplication> applications = placementApplicationService.getApplicationsForStudent(sid);
//        if (applications.isEmpty()) {
//            return ResponseEntity.noContent().build();
//        } else {
//            return ResponseEntity.ok(applications);
//        }
//    }
//}



package com.example.demo.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Repository.PlacementApplicationRepository;
import com.example.demo.Repository.PlacementDataRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.Servive.PlacementApplicationService;
import com.example.demo.entity.PlacementApplication;
import com.example.demo.entity.PlacementData;
import com.example.demo.entity.Student;

@RestController
@RequestMapping("/student/placementApp")
public class PlacementApplicationController {

    @Autowired
    private PlacementApplicationService placementApplicationService;

    @Autowired
    private PlacementDataRepository placementDataRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PlacementApplicationRepository placementApplicationRepository;

    /**
     * ✅ Apply using SID (existing flow)
     */
//    @PostMapping("/apply/{sid}/{opportunityId}")
//    public ResponseEntity<String> applyForOpportunityBySid(
//            @PathVariable int sid,
//            @PathVariable int opportunityId,
//            @RequestParam("resume") MultipartFile resumeFile) {
//
//        try {
//            PlacementData placementData = placementDataRepository.findById(opportunityId)
//                    .orElseThrow(() -> new RuntimeException("Opportunity not found"));
//
//            Student student = studentRepository.findById(sid)
//                    .orElseThrow(() -> new RuntimeException("Student not found"));
//
//            PlacementApplication application = new PlacementApplication();
//            application.setPlacementData(placementData);
//            application.setStudent(student);
//            application.setStatus("Pending");
//            application.setResume(resumeFile.getBytes());
//
//            placementApplicationRepository.save(application);
//
//            return ResponseEntity.ok("Application submitted successfully.");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body("Failed to submit application: " + e.getMessage());
//        }
//    }

    /**
     * ✅ Apply using UID (recommended for frontend, no need for student to know sid)
     */

    @PostMapping("/apply/{opportunityId}/{uid}")
    public ResponseEntity<?> applyForOpportunity(
            @PathVariable int opportunityId,
            @PathVariable int uid,
            @RequestParam("resume") MultipartFile resumeFile) {
        try {
            // ✅ Fetch student by uid
            Student student = studentRepository.findByUid(uid)
                .orElseThrow(() -> new RuntimeException("Student not found for uid: " + uid));

            // ✅ Fetch placement data by opportunityId
            PlacementData placementData = placementDataRepository.findById(opportunityId)
                .orElseThrow(() -> new RuntimeException("Placement opportunity not found for id: " + opportunityId));

            // ✅ Create new PlacementApplication
            PlacementApplication application = new PlacementApplication();
            application.setStudent(student);                // set Student entity
            application.setPlacementData(placementData);    // set PlacementData entity
            application.setResume(resumeFile.getBytes());   // set resume
            application.setStatus("Pending");               // default status

            
            System.out.println("Apply API called with uid = " + uid);

            // ✅ Save application
            placementApplicationRepository.save(application);

            return ResponseEntity.ok("Application submitted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error while applying: " + e.getMessage());
        }
    }


    /**
     * ✅ Get all applications for a student (by sid)
     */
    @GetMapping("/student/{sid}")
    public ResponseEntity<List<PlacementApplication>> getApplicationsForStudent(@PathVariable int sid) {
        List<PlacementApplication> applications = placementApplicationService.getApplicationsForStudent(sid);
        if (applications.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(applications);
        }
    }
}
