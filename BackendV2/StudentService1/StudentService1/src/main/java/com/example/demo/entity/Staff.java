package com.example.demo.entity;

import java.util.Set;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "staff_id")
    private int staffId;

    // uid is a foreign key referring to the User table in user-service (logical reference only)
    @Column(name = "uid")
    private int uid;
    
    
//    @ManyToOne
//    @JoinColumn(name = "uid")
//    @JsonIgnoreProperties("staff")
//    private User user;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 50)
    private String lastName;

    @Column(name = "address_line1", length = 50)
    private String addressLine1;

    @Column(name = "address_line2", length = 200)
    private String addressLine2;

    @Column(name = "designation", length = 200)
    private String designation;

    // Relationship with City table (local to this service)
    @ManyToOne
    @JoinColumn(name = "city_id")
    @JsonIgnoreProperties("staff")
    private City city;
    
    
    @OneToMany(mappedBy = "staff", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("staff")
    private Set<Course> courses;


	public Staff() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Staff(int staffId, int uid, String firstName, String lastName, String addressLine1, String addressLine2,
			String designation, City city, Set<Course> courses) {
		super();
		this.staffId = staffId;
		this.uid = uid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.designation = designation;
		this.city = city;
		this.courses = courses;
	}


	public int getStaffId() {
		return staffId;
	}


	public void setStaffId(int staffId) {
		this.staffId = staffId;
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


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public City getCity() {
		return city;
	}


	public void setCity(City city) {
		this.city = city;
	}


	public Set<Course> getCourses() {
		return courses;
	}


	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}


	@Override
	public String toString() {
		return "Staff [staffId=" + staffId + ", uid=" + uid + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2 + ", designation=" + designation
				+ ", city=" + city + ", courses=" + courses + "]";
	}

    

    
}
