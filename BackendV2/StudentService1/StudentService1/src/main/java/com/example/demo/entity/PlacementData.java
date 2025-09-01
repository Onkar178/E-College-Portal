package com.example.demo.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name = "placement_data")
public class PlacementData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "opportunity_id")
    private int opportunityId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "deadline", nullable = false)
    private LocalDateTime deadline;

    @OneToMany(mappedBy = "placementData", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("placementData")
    private Set<PlacementApplication> applications;
    
    
    // Constructors
    public PlacementData() {
    }


	public PlacementData(int opportunityId, String title, String companyName, String type, String description,
			LocalDateTime deadline, Set<PlacementApplication> applications) {
		super();
		this.opportunityId = opportunityId;
		this.title = title;
		this.companyName = companyName;
		this.type = type;
		this.description = description;
		this.deadline = deadline;
		this.applications = applications;
	}


	public int getOpportunityId() {
		return opportunityId;
	}


	public void setOpportunityId(int opportunityId) {
		this.opportunityId = opportunityId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getCompanyName() {
		return companyName;
	}


	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public LocalDateTime getDeadline() {
		return deadline;
	}


	public void setDeadline(LocalDateTime deadline) {
		this.deadline = deadline;
	}


	public Set<PlacementApplication> getApplications() {
		return applications;
	}


	public void setApplications(Set<PlacementApplication> applications) {
		this.applications = applications;
	}

   
}
