package com.example.demo.entity;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="event")
public class Event {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "event_id")
    private int eventId;

    @Column(name = "event_name", nullable = false, length = 100)
    private String eventName;

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "date_time", nullable = false)
    private LocalDateTime dateTime;

    
    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("event")
    private Set<RegisteredEvent> registeredEvents;


	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Event(int eventId, String eventName, String description, LocalDateTime dateTime,
			Set<RegisteredEvent> registeredEvents) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.description = description;
		this.dateTime = dateTime;
		this.registeredEvents = registeredEvents;
	}


	public int getEventId() {
		return eventId;
	}


	public void setEventId(int eventId) {
		this.eventId = eventId;
	}


	public String getEventName() {
		return eventName;
	}


	public void setEventName(String eventName) {
		this.eventName = eventName;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public LocalDateTime getDateTime() {
		return dateTime;
	}


	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}


	public Set<RegisteredEvent> getRegisteredEvents() {
		return registeredEvents;
	}


	public void setRegisteredEvents(Set<RegisteredEvent> registeredEvents) {
		this.registeredEvents = registeredEvents;
	}


	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", eventName=" + eventName + ", description=" + description + ", dateTime="
				+ dateTime + ", registeredEvents=" + registeredEvents + "]";
	}

    
    
}
