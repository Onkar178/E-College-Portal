package com.example.demo.entity;

public class PlacementApplicationDTO {

	private int applicationId;
    private String firstName;
    private String lastName;
    private String opportunityTitle;
    private String companyName;
    private String status;

    
    public PlacementApplicationDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PlacementApplicationDTO(int applicationId, String firstName, String lastName,
                                   String opportunityTitle, String companyName, String status) {
        this.applicationId = applicationId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.opportunityTitle = opportunityTitle;
        this.companyName = companyName;
        this.status = status;
    }

    // getters & setters
    public int getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(int applicationId) {
        this.applicationId = applicationId;
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

    public String getOpportunityTitle() {
        return opportunityTitle;
    }

    public void setOpportunityTitle(String opportunityTitle) {
        this.opportunityTitle = opportunityTitle;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
