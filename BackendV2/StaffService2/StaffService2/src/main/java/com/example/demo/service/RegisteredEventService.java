package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RegisteredEventDTO;
import com.example.demo.repository.RegisteredEventRepository;

@Service
public class RegisteredEventService {

	@Autowired
	RegisteredEventRepository registeredEventRepository;
	
	
	public List<RegisteredEventDTO> getRegisteredEventDetails() {
        return registeredEventRepository.getAllRegisteredEventsWithDetails();
    }
}
