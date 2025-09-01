package com.example.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PlacementApplicationDTO;
import com.example.demo.repository.PlacementApplicationRepository;


@Service
public class PlacementApplicationService {

	@Autowired
	PlacementApplicationRepository repository;

	public List<PlacementApplicationDTO> getAllApplicationsWithDetails() {
        return repository.findAllApplicationsWithDetails();
    }
}
