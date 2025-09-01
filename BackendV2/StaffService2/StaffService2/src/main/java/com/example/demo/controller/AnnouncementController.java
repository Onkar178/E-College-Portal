package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Announcement;
import com.example.demo.service.AnnouncementService;

@RestController
@RequestMapping("/staff/announcement")
public class AnnouncementController {

	@Autowired
    private AnnouncementService announcementService;

    @PostMapping("/add")
    public Announcement createAnnouncement(@RequestBody Announcement announcement) {
        return announcementService.addAnnouncement(announcement);
    }

    @GetMapping("/all")
    public List<Announcement> getAllAnnouncements() {
        return announcementService.getAllAnnouncements();
    }
    
    
    @PutMapping("/update/{id}")
    public Announcement updateAnnouncement(@PathVariable int id, @RequestBody Announcement updated) {
        Announcement existing = announcementService.getById(id);
        if (existing == null) throw new RuntimeException("Announcement not found");

        existing.setTitle(updated.getTitle());
        existing.setDescription(updated.getDescription());
        existing.setExpiry_date(updated.getExpiry_date());
        return announcementService.addAnnouncement(existing); // save
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAnnouncement(@PathVariable int id) {
        announcementService.deleteAnnouncement(id);
    }

}
