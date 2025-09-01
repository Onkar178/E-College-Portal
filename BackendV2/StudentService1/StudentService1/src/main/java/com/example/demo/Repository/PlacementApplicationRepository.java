package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PlacementApplication;

@Repository
public interface PlacementApplicationRepository extends JpaRepository<PlacementApplication, Integer> {

	boolean existsByStudent_SidAndPlacementData_OpportunityId(int sid, int opportunityId);


	 // Find all applications by student
    List<PlacementApplication> findByStudent_Sid(int sid);
    
    // Find all applications for a placement opportunity
    List<PlacementApplication> findByPlacementData_OpportunityId(int opportunityId);
}
