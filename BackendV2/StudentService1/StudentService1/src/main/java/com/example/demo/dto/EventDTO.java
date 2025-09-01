package com.example.demo.dto;

import java.time.LocalDateTime;

public class EventDTO {


	    private int eventId;
	    private String eventName;
	    private String description;
	    private LocalDateTime dateTime;

	    public EventDTO(int eventId, String eventName, String description, LocalDateTime dateTime) {
	        this.eventId = eventId;
	        this.eventName = eventName;
	        this.description = description;
	        this.dateTime = dateTime;
	    
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
	    
}
