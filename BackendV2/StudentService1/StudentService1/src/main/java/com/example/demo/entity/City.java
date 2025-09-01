package com.example.demo.entity;

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
@Table(name="city")
public class City {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
	int cityId;
	
	@Column(name = "city_name")
	String cityName;
	
	@Column(name = "state_name")
	String stateName;
	
	 @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
	 @JsonIgnoreProperties("city")
	 private Set<Student> student;

	 public City() {
		super();
		// TODO Auto-generated constructor stub
	 }

	 public City(int cityId, String cityName, String stateName, Set<Student> student) {
		super();
		this.cityId = cityId;
		this.cityName = cityName;
		this.stateName = stateName;
		this.student = student;
	 }

	 public int getCityId() {
		 return cityId;
	 }

	 public void setCityId(int cityId) {
		 this.cityId = cityId;
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

	 public Set<Student> getStudent() {
		 return student;
	 }

	 public void setStudent(Set<Student> student) {
		 this.student = student;
	 }

	 @Override
	 public String toString() {
		return "City [cityId=" + cityId + ", cityName=" + cityName + ", stateName=" + stateName + ", student=" + student
				+ "]";
	 }
	 
	 
}
