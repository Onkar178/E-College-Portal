package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.RegisteredEvent;
import com.example.demo.entity.RegisteredEventDTO;

@Repository
public interface RegisteredEventRepository extends JpaRepository<RegisteredEvent, Integer> {
	List<RegisteredEvent> findByEvent_EventId(int eventId);
	
	@Query("SELECT new com.example.demo.entity.RegisteredEventDTO(r.regId, s.firstName, s.lastName, e.eventName) " +
	           "FROM RegisteredEvent r " +
	           "JOIN r.student s " +
	           "JOIN r.event e")
	    List<RegisteredEventDTO> getAllRegisteredEventsWithDetails();
}
