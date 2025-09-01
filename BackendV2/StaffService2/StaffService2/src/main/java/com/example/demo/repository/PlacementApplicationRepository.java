package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PlacementApplication;
import com.example.demo.entity.PlacementApplicationDTO;

@Repository
public interface PlacementApplicationRepository extends JpaRepository<PlacementApplication, Integer> {

	@Query("SELECT new com.example.demo.entity.PlacementApplicationDTO(" +
	           "pa.applicationId, s.firstName, s.lastName, pd.title, pd.companyName, pa.status) " +
	           "FROM PlacementApplication pa " +
	           "JOIN pa.student s " +
	           "JOIN pa.placementData pd")
	    List<PlacementApplicationDTO> findAllApplicationsWithDetails();
}
