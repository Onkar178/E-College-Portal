package com.example.demo.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Announcement;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Integer> {

	// Optional: fetch only active announcements
	List<Announcement> findByExpiryDateAfterOrderByExpiryDateDesc(Date currentDate);

}
