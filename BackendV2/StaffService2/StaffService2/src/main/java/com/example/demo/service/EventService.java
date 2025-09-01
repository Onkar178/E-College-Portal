package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Event;
import com.example.demo.entity.RegisteredEvent;
import com.example.demo.entity.Student;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.RegisteredEventRepository;

@Service
public class EventService {

	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	RegisteredEventRepository registeredEventRepository;
	
	 public Event createEvent(Event event) {
	        return eventRepository.save(event);
	    }

	    public List<Event> getAllEvents() {
	        return eventRepository.findAll();
	    }

	    public RegisteredEvent registerStudent(Event event, Student student) {
	        RegisteredEvent registeredEvent = new RegisteredEvent();
	        registeredEvent.setEvent(event);
	        registeredEvent.setStudent(student);
	        return registeredEventRepository.save(registeredEvent);
	    }

	    public List<Student> getRegisteredStudents(int eventId) {
	        List<RegisteredEvent> regs = registeredEventRepository.findByEvent_EventId(eventId);
	        return regs.stream().map(RegisteredEvent::getStudent).toList();
	    }
	    
	    
	    
}
