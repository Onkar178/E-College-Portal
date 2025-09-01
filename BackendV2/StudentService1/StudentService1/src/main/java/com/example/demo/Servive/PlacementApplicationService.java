package com.example.demo.Servive;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.Repository.PlacementApplicationRepository;
import com.example.demo.Repository.PlacementDataRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.entity.PlacementApplication;
import com.example.demo.entity.PlacementData;
import com.example.demo.entity.Student;

@Service
public class PlacementApplicationService {

	@Autowired
	PlacementApplicationRepository placementApplicationRepository;
	
	@Autowired
    private PlacementDataRepository placementDataRepository;

    @Autowired
    private StudentRepository studentRepository;

    public void applyForPlacement(int sid, int opportunityId, MultipartFile resumeFile) throws IOException {
        // Check if already applied
        if (placementApplicationRepository.existsByStudent_SidAndPlacementData_OpportunityId(sid, opportunityId)) {
            throw new RuntimeException("Student has already applied for this opportunity");
        }

        Student student = studentRepository.findById(sid)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        PlacementData placementData = placementDataRepository.findById(opportunityId)
                .orElseThrow(() -> new RuntimeException("Placement opportunity not found"));

        PlacementApplication application = new PlacementApplication();
        application.setStudent(student);
        application.setPlacementData(placementData);
        application.setResume(resumeFile.getBytes());
        application.setStatus("Applied"); // "Applied" sounds more appropriate for submitted

        placementApplicationRepository.save(application);
    }

    public List<PlacementApplication> getApplicationsForStudent(int sid) {
        return placementApplicationRepository.findByStudent_Sid(sid);
    }
}
