package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.CityService;
import com.example.demo.entity.City;

@RestController
@RequestMapping("/city")
public class CityController {
	
	@Autowired
	CityService cservice;
	
	@GetMapping("/getallcity")
	public List<City> getallcity(){
		return cservice.getall();
	}
}
