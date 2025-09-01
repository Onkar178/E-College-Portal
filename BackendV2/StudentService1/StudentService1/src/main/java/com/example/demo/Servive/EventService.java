package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.EventRepository;
import com.example.demo.entity.Event;

@Service
public class EventService {
	
	@Autowired
	EventRepository eventrepository;
	
	
	public List<Event> getAllEvents(){
		return eventrepository.findAll();
	}
}
