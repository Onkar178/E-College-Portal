package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.entity.City;
import com.example.demo.entity.Staff;
import com.example.demo.entity.StaffDTO;
import com.example.demo.entity.StaffResponseDTO;
import com.example.demo.repository.CityRepository;
import com.example.demo.repository.StaffRepository;

@Service
public class StaffService {
	
	@Autowired
	StaffRepository srepo;
	
	@Autowired
	CityRepository cityRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public List<Staff> getall(){
		return srepo.findAll();
	}
	

	    public Staff saveStaff(Staff staff) {
	        return srepo.save(staff);
	    }

	    public List<Staff> getAllStaff() {
	        return srepo.findAll();
	    }

	    public Staff getStaffById(int id) {
	        return srepo.findById(id).orElse(null);
	    }

//	    public Staff getStaffByUid(int uid) {
//	        return srepo.findByUid(uid);
//	    }

//	    public List<Staff> getStaffListByUid(int uid) {
//	        return srepo.findByUid(uid);
//	    }

	    
	    public void deleteStaff(int id) {
	        srepo.deleteById(id);
	    }


	    public StaffResponseDTO getStaffByUid(int uid) {
	        Optional<Staff> optionalStaff = srepo.findByUid(uid);

	        if (optionalStaff.isPresent()) {
	            return new StaffResponseDTO(optionalStaff.get());
	        } else {
	            // Return an empty profile (to render empty form on frontend)
	            StaffResponseDTO empty = new StaffResponseDTO();
	            empty.setUid(uid); // Important so frontend keeps track
	            empty.setFirstName("");
	            empty.setLastName("");
	            empty.setAddressLine1("");
	            empty.setAddressLine2("");
	            empty.setDesignation("");
	            empty.setCityName("");
	            empty.setStateName("");
	            return empty;
	        }
	    }


	    
//	    public void saveOrUpdateStaffProfile(int uid, StaffDTO dto) {
//	        // Check for existing city or create a new one
//	        City city = cityRepository.findByCityNameAndStateName(dto.getCityName(), dto.getStateName())
//	                .orElseGet(() -> {
//	                    City newCity = new City();
//	                    newCity.setCityName(dto.getCityName());
//	                    newCity.setStateName(dto.getStateName());
//	                    return cityRepository.save(newCity);
//	                });
//
//	        // Create or update staff profile
//	        Staff staff = srepo.findByUid(uid).orElse(new Staff());
//	        staff.setUid(uid);
//	        staff.setFirstName(dto.getFirstName());
//	        staff.setLastName(dto.getLastName());
//	        staff.setAddressLine1(dto.getAddressLine1());
//	        staff.setAddressLine2(dto.getAddressLine2());
//	        staff.setDesignation(dto.getDesignation());
//	        staff.setCity(city);
//
//	        srepo.save(staff);
//	    }
	    
	    
	    
	    public void saveOrUpdateStaffProfile(int uid, StaffDTO dto) {
	        // 1. Check if City already exists or create new
	        City city = cityRepository.findByCityNameAndStateName(dto.getCityName(), dto.getStateName())
	                .orElseGet(() -> {
	                    City newCity = new City();
	                    newCity.setCityName(dto.getCityName());
	                    newCity.setStateName(dto.getStateName());
	                    return cityRepository.save(newCity);
	                });

	        // 2. Check if staff already exists with this UID
	        Optional<Staff> existingStaffOpt = srepo.findByUid(uid);
	        Staff staff;

	        if (existingStaffOpt.isPresent()) {
	            // Update existing staff
	            staff = existingStaffOpt.get();
	        } else {
	            // New staff entry
	            staff = new Staff();
	            staff.setUid(uid); // Must set UID for new entry
	        }

	        // 3. Set/update the profile fields
	        staff.setFirstName(dto.getFirstName());
	        staff.setLastName(dto.getLastName());
	        staff.setAddressLine1(dto.getAddressLine1());
	        staff.setAddressLine2(dto.getAddressLine2());
	        staff.setDesignation(dto.getDesignation());
	        staff.setCity(city); // Set the found or newly created city

	        // 4. Save to DB
	        srepo.save(staff);
	    }
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
//	    //GetStaffwithDesignation
//	    public List<Staff> getStaffByDesignation(String designation) {
//	        return srepo.findByDesignation(designation);
//	    }
//	    
//	    @GetMapping("/designation/{designation}")
//	    public List<Staff> getStaffByDesignation(@PathVariable String designation) {
//	        return service.getStaffByDesignation(designation);
//	    }

}
