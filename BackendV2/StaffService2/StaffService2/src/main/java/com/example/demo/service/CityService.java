package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.City;
import com.example.demo.repository.CityRepository;


@Service
public class CityService {

	@Autowired
	CityRepository crepo;
	
	public List<City> getall(){
		return crepo.findAll();
	}
	
//	public City saveCity(City city) {
//		return crepo.save(city);
//	}
//	
	public City saveCity(City city) {
	    Optional<City> existing = crepo.findByCityNameAndStateName(city.getCityName(), city.getStateName());
	    return existing.orElseGet(() -> crepo.save(city));
	}

	
	public City getOrCreateCity(String cityName, String stateName) {
	    return crepo.findByCityNameAndStateName(cityName, stateName)
	        .orElseGet(() -> {
	            City newCity = new City();
	            newCity.setCityName(cityName);
	            newCity.setStateName(stateName);
	            return crepo.save(newCity);
	        });
	}

	
	public City findByUsingId(int id) {
		return crepo.findById(id).orElse(null);
	}
}
