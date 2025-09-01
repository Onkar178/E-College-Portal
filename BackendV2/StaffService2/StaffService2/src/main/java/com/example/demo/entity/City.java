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
import jakarta.persistence.UniqueConstraint;


@Entity
@Table(
    name = "city",
    uniqueConstraints = @UniqueConstraint(columnNames = {"city_name", "state_name"})
)
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id", nullable = false)
    private int cityId;

    @Column(name = "city_name", nullable = false)
    private String cityName;

    @Column(name = "state_name", nullable = false)
    private String stateName;

    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("city")
    private Set<Staff> staff;

    public City() {}

    public City(int cityId, String cityName, String stateName, Set<Staff> staff) {
        this.cityId = cityId;
        this.cityName = cityName;
        this.stateName = stateName;
        this.staff = staff;
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

    public Set<Staff> getStaff() {
        return staff;
    }

    public void setStaff(Set<Staff> staff) {
        this.staff = staff;
    }

    @Override
    public String toString() {
        return "City [cityId=" + cityId + ", cityName=" + cityName + ", stateName=" + stateName + "]";
    }
}

