package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PlacementData;
import com.example.demo.repository.PlacementDataRepository;

@Service
public class PlacementDataService {

	@Autowired
	PlacementDataRepository repository;
	
	// Add new placement opportunity
    public PlacementData savePlacementData(PlacementData placementData) {
        return repository.save(placementData);
    }

    // Get all placement opportunities
    public List<PlacementData> getAllPlacements() {
        return repository.findAll();
    }

    // Get single placement opportunity
    public PlacementData getPlacementById(int id) {
        return repository.findById(id).orElse(null);
    }

    // Delete placement opportunity
    public void deletePlacement(int id) {
        repository.deleteById(id);
    }
    
    
}
