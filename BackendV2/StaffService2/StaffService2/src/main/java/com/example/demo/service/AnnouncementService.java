package com.example.demo.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Announcement;
import com.example.demo.repository.AnnouncementRepository;


@Service
public class AnnouncementService {
	
	@Autowired
	AnnouncementRepository announcerepo;
	
//	 public Announcement addAnnouncement(Announcement announcement) {
//	        return announcerepo.save(announcement);
//	 }

	 public List<Announcement> getAllAnnouncements() {
	      return announcerepo.findAll();
	 }
	 
	 
	 public Announcement addAnnouncement(Announcement announcement) {
		    Date now = new Date(); // current timestamp

		    // Strip time part to compare date-only
		    java.util.Calendar cal = java.util.Calendar.getInstance();
		    cal.setTime(now);
		    cal.set(java.util.Calendar.HOUR_OF_DAY, 0);
		    cal.set(java.util.Calendar.MINUTE, 0);
		    cal.set(java.util.Calendar.SECOND, 0);
		    cal.set(java.util.Calendar.MILLISECOND, 0);
		    Date today = cal.getTime();

		    if (announcement.getExpiry_date().before(today)) {
		        throw new IllegalArgumentException("Expiry date cannot be in the past");
		    }

		    return announcerepo.save(announcement);
		}


	 	public Announcement getById(int id) {
		    return announcerepo.findById(id).orElse(null);
		}

		public void deleteAnnouncement(int id) {
		    announcerepo.deleteById(id);
		}

}
