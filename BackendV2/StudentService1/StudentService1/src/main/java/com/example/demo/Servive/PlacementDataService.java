package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.PlacementDataRepository;
import com.example.demo.entity.PlacementData;

@Service
public class PlacementDataService {
	
	@Autowired
	PlacementDataRepository placementDataRepository;
	
	public List<PlacementData> getAllPlacementData(){
		return placementDataRepository.findAll();
	}
}
