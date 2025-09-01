package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.CityRepository;
import com.example.demo.entity.City;

@Service
public class CityService {

	@Autowired
	CityRepository cityrepo;
	
	public List<City> getall(){
		return cityrepo.findAll();
	}
	
}
