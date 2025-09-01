package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Role;
import com.example.demo.service.RoleService;

@RestController
@RequestMapping("role")
@CrossOrigin("http:/localhost:8080")
public class RoleController {

	@Autowired
	RoleService rservice;
	
	@GetMapping("/all")
	public List<Role> getall(){
		return rservice.getAll();
	}
	
	
}
