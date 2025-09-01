package com.example.demo.entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="student")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sid", nullable = false)
    private int sid;

    // uid is a foreign key referring to the User table in user-service (logical reference only)
    @Column(name = "uid")
    private int uid;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 50)
    private String lastName;

    @Column(name = "address_line1", length = 50)
    private String addressLine1;

    @Column(name = "address_line2", length = 200)
    private String addressLine2;
    
    // Relationship with City table (local to this service)
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "city_id")
    @JsonIgnoreProperties("student")
    private City city;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("student")
    private Set<RegisteredEvent> registeredEvents;


    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("student")
    private Set<PlacementApplication> applications;
    
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(int sid, int uid, String firstName, String lastName, String addressLine1, String addressLine2,
			City city, Set<RegisteredEvent> registeredEvents, Set<PlacementApplication> applications) {
		super();
		this.sid = sid;
		this.uid = uid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.registeredEvents = registeredEvents;
		this.applications = applications;
	}

	public int getSid() {
		return sid;
	}

	public void setSid(int sid) {
		this.sid = sid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
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

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Set<RegisteredEvent> getRegisteredEvents() {
		return registeredEvents;
	}

	public void setRegisteredEvents(Set<RegisteredEvent> registeredEvents) {
		this.registeredEvents = registeredEvents;
	}

	public Set<PlacementApplication> getApplications() {
		return applications;
	}

	public void setApplications(Set<PlacementApplication> applications) {
		this.applications = applications;
	}


	
}
