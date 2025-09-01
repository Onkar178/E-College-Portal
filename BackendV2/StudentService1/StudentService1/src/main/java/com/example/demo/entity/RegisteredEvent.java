package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="event_registration")
public class RegisteredEvent {
	
	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "reg_id")
	    private int regId;

	 	@ManyToOne
	    @JoinColumn(name = "event_id", nullable = false)
	    @JsonIgnoreProperties("registeredEvents")
	    private Event event;

	    @ManyToOne
	    @JoinColumn(name = "sid", nullable = false)
	    @JsonIgnoreProperties("registeredEvents")
	    private Student student;

		public RegisteredEvent() {
			super();
			// TODO Auto-generated constructor stub
		}

		public RegisteredEvent(int regId, Event event, Student student) {
			super();
			this.regId = regId;
			this.event = event;
			this.student = student;
		}

		public int getRegId() {
			return regId;
		}

		public void setRegId(int regId) {
			this.regId = regId;
		}

		public Event getEvent() {
			return event;
		}

		public void setEvent(Event event) {
			this.event = event;
		}

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		@Override
		public String toString() {
			return "RegisteredEvent [regId=" + regId + ", event=" + event + ", student=" + student + "]";
		}
	    
	    
}
