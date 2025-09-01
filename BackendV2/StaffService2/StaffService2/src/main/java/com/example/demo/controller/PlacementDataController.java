package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.PlacementData;
import com.example.demo.service.PlacementDataService;

@RestController
@RequestMapping("/placements")
public class PlacementDataController {

	@Autowired
	PlacementDataService service;
	
	 @PostMapping("/add")
	    public PlacementData addPlacement(@RequestBody PlacementData placementData) {
	        return service.savePlacementData(placementData);
	    }

	    // Staff can view all opportunities
	    @GetMapping("/all")
	    public List<PlacementData> getAllPlacements() {
	        return service.getAllPlacements();
	    }

	    // View single placement opportunity by id
	    @GetMapping("/{id}")
	    public PlacementData getPlacementById(@PathVariable int id) {
	        return service.getPlacementById(id);
	    }

	    // Staff can delete an opportunity
	    @DeleteMapping("/{id}")
	    public String deletePlacement(@PathVariable int id) {
	        service.deletePlacement(id);
	        return "Placement Opportunity removed with id: " + id;
	    }
}
