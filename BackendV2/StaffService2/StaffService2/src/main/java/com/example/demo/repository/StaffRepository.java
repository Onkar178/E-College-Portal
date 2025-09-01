package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Integer> {
//	Staff findByUid(int uid);
	Optional<Staff> findByUid(int uid);

	List<Staff> findByDesignation(String designation);

}
