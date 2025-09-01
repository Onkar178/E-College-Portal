package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.RegisteredEventDTO;
import com.example.demo.service.RegisteredEventService;

@RestController
@RequestMapping("/registeredevents")
public class RegisteredEventController {

	
	 @Autowired
	    private RegisteredEventService service;

	    @GetMapping("/details")
	    public List<RegisteredEventDTO> getRegisteredEventDetails() {
	        return service.getRegisteredEventDetails();
	    }
}
