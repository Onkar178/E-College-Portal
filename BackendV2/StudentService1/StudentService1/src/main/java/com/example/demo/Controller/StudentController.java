package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.StudentService;
import com.example.demo.dto.StudentDTO;
import com.example.demo.entity.Announcement;
import com.example.demo.entity.Student;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:3000")
public class StudentController {
	
	@Autowired
	StudentService sservice;
	
	@GetMapping("/getallstudent")
	public List<Student> getallStudent(){
		return sservice.getall();
	}
	
	  // Get student profile by user id (uid)
    @GetMapping("/profile/{uid}")
    public ResponseEntity<Student> getStudentProfileByUid(@PathVariable int uid) {
        Student student = sservice.getStudentByUid(uid);
        if (student == null) {
            return ResponseEntity.noContent().build(); // No profile found yet
        }
        return ResponseEntity.ok(student);
    }
    
    // Save or update student profile by user id (uid)
    @PostMapping("/profile/{uid}")
    public ResponseEntity<Student> saveOrUpdateProfile(@PathVariable int uid, @RequestBody Student studentDetails) {
        Student existingStudent = sservice.getStudentByUid(uid);

        if (existingStudent == null) {
            // Create new profile and forcibly set uid
            studentDetails.setUid(uid);
            Student saved = sservice.saveStudent(studentDetails);
            return ResponseEntity.ok(saved);  // return saved student including generated sid
        } else {
            // Update existing profile fields
            existingStudent.setFirstName(studentDetails.getFirstName());
            existingStudent.setLastName(studentDetails.getLastName());
            existingStudent.setAddressLine1(studentDetails.getAddressLine1());
            existingStudent.setAddressLine2(studentDetails.getAddressLine2());
            existingStudent.setCity(studentDetails.getCity());
            Student updated = sservice.saveStudent(existingStudent);
            return ResponseEntity.ok(updated); // return updated student including sid
        }
    }

	
//  ✅ Get profile by UID
    @GetMapping("/uid/{uid}")
    public ResponseEntity<StudentDTO> getStudentByUid(@PathVariable int uid) {
        StudentDTO dto = sservice.getStudentProfileByUid(uid);
        if (dto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(dto);
    }

//    
   
    // ✅ Update or Create profile by UID
    @PutMapping("/profile/{uid}")
    public ResponseEntity<String> updateProfile(@PathVariable int uid, @RequestBody StudentDTO dto) {
        sservice.saveOrUpdateStudentProfile(uid, dto);
        return ResponseEntity.ok("Student profile updated successfully");
    }

    
    @GetMapping("/announcements")
    public List<Announcement> getAllAnnouncements() {
        return sservice.getAllAnnouncements();
    }

    // 🔹 Get only ACTIVE (non-expired) announcements
    @GetMapping("/announcements/active")
    public List<Announcement> getActiveAnnouncements() {
        return sservice.getActiveAnnouncements();
    }
    
}
