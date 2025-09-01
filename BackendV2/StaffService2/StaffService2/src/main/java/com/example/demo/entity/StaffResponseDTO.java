package com.example.demo.entity;

public class StaffResponseDTO {

	    private int staffId;
	    private int uid;
	    private String firstName;
	    private String lastName;
	    private String addressLine1;
	    private String addressLine2;
	    private String designation;
	    private String cityName;
	    private String stateName;

	    public StaffResponseDTO() {
	    }

	    public StaffResponseDTO(Staff staff) {
	        this.staffId = staff.getStaffId();
	        this.uid = staff.getUid();
	        this.firstName = staff.getFirstName();
	        this.lastName = staff.getLastName();
	        this.addressLine1 = staff.getAddressLine1();
	        this.addressLine2 = staff.getAddressLine2();
	        this.designation = staff.getDesignation();
	        if (staff.getCity() != null) {
	            this.cityName = staff.getCity().getCityName();
	            this.stateName = staff.getCity().getStateName();
	        }
	    }

	    // Getters and Setters

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

	    public String getCityName() {
	        return cityName;
	    }

	    public void setCityName(String cityName) {
	        this.cityName = cityName;
	    }

	    public String getStateName() {
	        return stateName;
	    }

	    public void setStateName(String stateName) {
	        this.stateName = stateName;
	    }
}
