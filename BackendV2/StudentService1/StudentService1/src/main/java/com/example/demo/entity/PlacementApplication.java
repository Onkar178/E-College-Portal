package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@Table(name="placement_application")
public class PlacementApplication {

	 	@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 	@Column(name="application_id", nullable = false)
	    private int applicationId;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "opportunity_id", nullable = false)
	    @JsonIgnoreProperties("applications") 
	    private PlacementData placementData;

	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "sid", nullable = false)
	    @JsonIgnoreProperties("applications") 
	    private Student student;

	    @Lob
	    @JsonIgnore
	    @Column(name = "resume", columnDefinition = "LONGBLOB")
	    private byte[] resume;

	    @Column(name = "status")
	    private String status;

		public PlacementApplication() {
			super();
			// TODO Auto-generated constructor stub
		}

		public PlacementApplication(int applicationId, PlacementData placementData, Student student, byte[] resume,
				String status) {
			super();
			this.applicationId = applicationId;
			this.placementData = placementData;
			this.student = student;
			this.resume = resume;
			this.status = status;
		}

		public int getApplicationId() {
			return applicationId;
		}

		public void setApplicationId(int applicationId) {
			this.applicationId = applicationId;
		}

		public PlacementData getPlacementData() {
			return placementData;
		}

		public void setPlacementData(PlacementData placementData) {
			this.placementData = placementData;
		}

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		public byte[] getResume() {
			return resume;
		}

		public void setResume(byte[] resume) {
			this.resume = resume;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

	    
}
