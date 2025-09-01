package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.PlacementData;

@Repository
public interface PlacementDataRepository extends JpaRepository<PlacementData, Integer> {

}
