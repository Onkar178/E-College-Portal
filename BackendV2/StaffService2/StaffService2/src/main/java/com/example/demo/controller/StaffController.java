package com.example.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.City;
import com.example.demo.entity.Staff;
import com.example.demo.entity.StaffDTO;
import com.example.demo.entity.StaffResponseDTO;
import com.example.demo.repository.CityRepository;
import com.example.demo.service.StaffService;

@RestController
@RequestMapping("/staff")
@CrossOrigin(origins = "http://localhost:3000")
public class StaffController {
	
	@Autowired
	StaffService sservice;
	
//	@GetMapping("/all")
//	public List<Staff> getAllStaff(){
//		return sservice.getall();
//	}
//	
	 @Autowired
	    private CityRepository crepo;

	    @PostMapping("/add")
	    public Staff addStaff(@RequestBody Staff staff) {
	        // Find or create city
	        City city = crepo.findByCityNameAndStateName(
	                staff.getCity().getCityName(),
	                staff.getCity().getStateName()
	        ).orElseGet(() -> crepo.save(staff.getCity()));

	        staff.setCity(city);
	        return sservice.saveStaff(staff);
	    }

	 @GetMapping("/{id}")
	    public Staff getStaffById(@PathVariable int id) {
	        return sservice.getStaffById(id);
	 }
	 

	 
	 @GetMapping("/uid/{uid}")
	    public ResponseEntity<StaffResponseDTO> getStaffByUid(@PathVariable int uid) {
	        StaffResponseDTO dto = sservice.getStaffByUid(uid);
	        if (dto == null) {
	            return ResponseEntity.notFound().build();
	        }
	        return ResponseEntity.ok(dto);
	    }

	 
	 @PostMapping("/profile/{uid}")
	    public ResponseEntity<String> completeStaffProfile(@PathVariable int uid, @RequestBody StaffDTO staffDTO) {
	        sservice.saveOrUpdateStaffProfile(uid, staffDTO);
	        return ResponseEntity.ok("Staff profile saved successfully");
	    }


	 
	 @PostMapping("/update-profile/{uid}")
	 public ResponseEntity<String> updateProfile(@PathVariable int uid, @RequestBody StaffDTO dto) {
	     sservice.saveOrUpdateStaffProfile(uid, dto);
	     return ResponseEntity.ok("Staff profile updated successfully");
	 }

	 
	 //delete by using id
	 @DeleteMapping("/delete/{id}")
	 public ResponseEntity<String> deleteStaff(@PathVariable int id) {
	     Staff staff = sservice.getStaffById(id);
	     if (staff == null) {
	         return ResponseEntity.notFound().build();
	     }

	     sservice.deleteStaff(id);
	     return ResponseEntity.ok("Staff with ID " + id + " deleted successfully.");
	 }
	 

	 
}
