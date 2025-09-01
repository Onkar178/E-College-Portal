package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.EventRepository;
import com.example.demo.Repository.RegisteredEventRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.dto.EventDTO;
import com.example.demo.entity.Event;
import com.example.demo.entity.RegisteredEvent;
import com.example.demo.entity.Student;

@Service
public class RegisteredEventService {
	
	@Autowired
    private RegisteredEventRepository registeredEventRepository;

	@Autowired
	    private StudentRepository studentRepository;

	    @Autowired
	    private EventRepository eventRepository;

	    public String registerForEvent(int uid, int eventId) {
	        // 1. Check student exists
	        Student student = studentRepository.findByUid(uid)
	                .orElseThrow(() -> new RuntimeException("Student not found for uid: " + uid));

	        // 2. Check event exists
	        Event event = eventRepository.findById(eventId)
	                .orElseThrow(() -> new RuntimeException("Event not found for eventId: " + eventId));

	        // 3. Check already registered
	        if (registeredEventRepository.existsByStudent_SidAndEvent_EventId(student.getSid(), eventId)) {
	            return "Already applied for this event!";
	        }

	        // 4. Save registration
	        RegisteredEvent registeredEvent = new RegisteredEvent();
	        registeredEvent.setStudent(student);
	        registeredEvent.setEvent(event);
	        registeredEventRepository.save(registeredEvent);

	        return "Successfully registered for event!";
	    }

	    public List<EventDTO> getRegisteredEvents(int uid) {
	        Student student = studentRepository.findByUid(uid)
	                .orElseThrow(() -> new RuntimeException("Student not found for uid: " + uid));

	        List<RegisteredEvent> registeredEvents = registeredEventRepository.findByStudent_Sid(student.getSid());

	        return registeredEvents.stream()
	                .map(re -> new EventDTO(
	                        re.getEvent().getEventId(),
	                        re.getEvent().getEventName(),
	                        re.getEvent().getDescription(),
	                        re.getEvent().getDateTime()
	                ))
	                .toList();
	    }

}
