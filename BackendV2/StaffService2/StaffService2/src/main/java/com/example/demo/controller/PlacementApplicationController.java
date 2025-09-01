package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.PlacementApplicationDTO;
import com.example.demo.service.PlacementApplicationService;

@RestController
@RequestMapping("/staff")
public class PlacementApplicationController {

	@Autowired
	PlacementApplicationService service;
	
	@GetMapping("/placements/applications")
    public List<PlacementApplicationDTO> getAllApplications() {
        return service.getAllApplicationsWithDetails();
    }
}
