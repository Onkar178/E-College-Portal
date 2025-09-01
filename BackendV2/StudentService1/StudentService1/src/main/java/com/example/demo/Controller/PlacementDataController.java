package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.PlacementDataService;
import com.example.demo.entity.PlacementData;

@RestController
@RequestMapping("/student/placementdata")
public class PlacementDataController {

	@Autowired
	PlacementDataService placementDataService;
	
	@GetMapping("/getAllData")
	public List<PlacementData> getAllPlacementData(){
		return placementDataService.getAllPlacementData();
	}
}
