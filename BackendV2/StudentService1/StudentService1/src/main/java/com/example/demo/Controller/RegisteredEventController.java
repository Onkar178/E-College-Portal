package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.RegisteredEventService;
import com.example.demo.dto.EventDTO;


@RestController
@RequestMapping("/registeredEvent")
public class RegisteredEventController {

	 	@Autowired
	    private RegisteredEventService registeredEventService;


	 	 // ✅ Register a student for an event
	    @PostMapping("/register/{uid}/{eventId}")
	    public ResponseEntity<String> registerForEvent(
	            @PathVariable int uid,
	            @PathVariable int eventId) {
	        try {
	            String response = registeredEventService.registerForEvent(uid, eventId);
	            return ResponseEntity.ok(response);
	        } catch (RuntimeException e) {
	            return ResponseEntity.badRequest().body(e.getMessage());
	        }
	    }

	    // ✅ Get all events registered by a student
	    @GetMapping("/student/{uid}")
	    public ResponseEntity<List<EventDTO>> getRegisteredEvents(@PathVariable int uid) {
	        try {
	            List<EventDTO> events = registeredEventService.getRegisteredEvents(uid);
	            return ResponseEntity.ok(events);
	        } catch (RuntimeException e) {
	            return ResponseEntity.badRequest().build();
	        }
	    }
	 	  
}
