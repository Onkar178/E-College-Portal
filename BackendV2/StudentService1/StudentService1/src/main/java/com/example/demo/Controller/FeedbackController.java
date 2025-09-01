package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Servive.FeedbackService;
import com.example.demo.entity.Feedback;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

	@Autowired
	FeedbackService feedbackService;
	
	@GetMapping("/getAllFeddback")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @GetMapping("/student/{sid}")
    public List<Feedback> getFeedbackByStudent(@PathVariable int sid) {
        return feedbackService.getFeedbackByStudentId(sid);
    }

    @PostMapping
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.createFeedback(feedback);
    }

//    @PostMapping
//    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
//        Feedback savedFeedback = feedbackService.createFeedback(feedback);
//        return new ResponseEntity<>(savedFeedback, HttpStatus.CREATED);
//    }

    
    
    @DeleteMapping("/{review_id}")
    public void deleteFeedback(@PathVariable int review_id) {
        feedbackService.deleteFeedback(review_id);
    }
}
