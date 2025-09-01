package com.example.demo.entity;

public class RegisteredEventDTO {

	 private int regId;
	    private String firstName;
	    private String lastName;
	    private String eventName;

	    public RegisteredEventDTO() {
	    	
	    }

	    public RegisteredEventDTO(int regId, String firstName, String lastName, String eventName) {
	        this.regId = regId;
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.eventName = eventName;
	    }

		public int getRegId() {
			return regId;
		}

		public void setRegId(int regId) {
			this.regId = regId;
		}

		public String getFirstName() {
			return firstName;
		}

		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}

		public String getLastName() {
			return lastName;
		}

		public void setLastName(String lastName) {
			this.lastName = lastName;
		}

		public String getEventName() {
			return eventName;
		}

		public void setEventName(String eventName) {
			this.eventName = eventName;
		}
	    
	    
	    
}
