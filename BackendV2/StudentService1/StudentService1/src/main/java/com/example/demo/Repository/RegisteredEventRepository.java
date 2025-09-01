package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.RegisteredEvent;

@Repository
public interface RegisteredEventRepository extends JpaRepository<RegisteredEvent, Integer> {

	boolean existsByStudent_SidAndEvent_EventId(int sid, int eventId);
	
	List<RegisteredEvent> findByStudent_Sid(int sid);
}
