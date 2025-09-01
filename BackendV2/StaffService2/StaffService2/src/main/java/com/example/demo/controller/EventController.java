package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Event;
import com.example.demo.entity.Student;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.EventService;

@RestController
@RequestMapping("/events")
public class EventController {
	
	@Autowired
	EventService eventService;
	
	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	StudentRepository studentRepository;
	
	@PostMapping("/create")
    public ResponseEntity<?> createEvent(@RequestBody Event event) {
        if (event.getEventName() == null || event.getEventName().isBlank()) {
            return ResponseEntity.badRequest().body("Event name is required");
        }
        Event saved = eventService.createEvent(event);
        return ResponseEntity.ok("Event created successfully with ID: " + saved.getEventId());
    }

    // --- LIST ALL EVENTS ---
    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    // --- REGISTER STUDENT FOR EVENT ---
    @PostMapping("/{eventId}/register/{studentId}")
    public ResponseEntity<?> registerStudent(@PathVariable int eventId, @PathVariable int studentId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        eventService.registerStudent(event, student);
        return ResponseEntity.ok("Student registered successfully for event " + event.getEventName());
    }

    // --- STAFF VIEW STUDENTS FOR EVENT ---
    @GetMapping("/{eventId}/students")
    public ResponseEntity<?> getRegisteredStudents(@PathVariable int eventId) {
        List<Student> students = eventService.getRegisteredStudents(eventId);
        return ResponseEntity.ok(students);
    }
	
}
