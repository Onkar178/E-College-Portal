package com.example.demo.Servive;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.AnnouncementRepository;
import com.example.demo.Repository.CityRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.dto.StudentDTO;
import com.example.demo.entity.Announcement;
import com.example.demo.entity.City;
import com.example.demo.entity.Student;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository srepo;
	
	@Autowired
	CityRepository cityRepository;
	
	@Autowired
    private AnnouncementRepository announcementRepository;
	
	public List<Student> getall(){
		return srepo.findAll();
	}
	
	public Student getStudentByUid(int uid) {
	    return srepo.findByUid(uid).orElse(null); // return null if not found
	}
	
	public Student saveStudent(Student student) {
//	    return srepo.save(student);
		
		  City city = student.getCity();
		    if (city != null) {
		        if (city.getCityId() != 0) {
		            // Fetch the persistent city entity from DB (recommended)
		            city = cityRepository.findById(city.getCityId())
		                     .orElseThrow(() -> new RuntimeException("City not found"));
		            student.setCity(city);
		        } else {
		            // Optionally save new city if cityId not present
		            city = cityRepository.save(city);
		            student.setCity(city);
		        }
		    }
		    return srepo.save(student);
	}
	

	
	 public StudentDTO getStudentProfileByUid(int uid) {
	        Optional<Student> optStudent = srepo.findByUid(uid);
	        if (optStudent.isEmpty()) {
	            return null;
	        }

	        Student student = optStudent.get();
	        StudentDTO dto = new StudentDTO();
	        dto.setSid(student.getSid());
	        dto.setFirstName(student.getFirstName());
	        dto.setLastName(student.getLastName());
	        dto.setAddressLine1(student.getAddressLine1());
	        dto.setAddressLine2(student.getAddressLine2());

	        if (student.getCity() != null) {
	            dto.setCityName(student.getCity().getCityName());
	            dto.setStateName(student.getCity().getStateName());
	        }

	        return dto;
	    }

	    // ✅ Save or Update Student Profile
	    public void saveOrUpdateStudentProfile(int uid, StudentDTO dto) {
	        Optional<Student> optStudent = srepo.findByUid(uid);
	        Student student = optStudent.orElseGet(() -> {
	            Student s = new Student();
	            s.setUid(uid);
	            return s;
	        });

	        student.setFirstName(dto.getFirstName());
	        student.setLastName(dto.getLastName());
	        student.setAddressLine1(dto.getAddressLine1());
	        student.setAddressLine2(dto.getAddressLine2());

	        if (dto.getCityName() != null && dto.getStateName() != null) {
	            City city = cityRepository.findByCityNameAndStateName(dto.getCityName(), dto.getStateName())
	                    .orElseGet(() -> {
	                        City newCity = new City();
	                        newCity.setCityName(dto.getCityName());
	                        newCity.setStateName(dto.getStateName());
	                        return cityRepository.save(newCity);
	                    });
	            student.setCity(city);
	        }

	        srepo.save(student);
	    }

	    
	    public List<Announcement> getAllAnnouncements() {
	        return announcementRepository.findAll();
	    }

	    // OR fetch only active (non-expired) announcements
	    public List<Announcement> getActiveAnnouncements() {
	        return announcementRepository.findByExpiryDateAfterOrderByExpiryDateDesc(new Date());
	    }
}
