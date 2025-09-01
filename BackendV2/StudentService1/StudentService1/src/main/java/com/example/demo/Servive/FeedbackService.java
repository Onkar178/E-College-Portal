package com.example.demo.Servive;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.FeedbackRepository;
import com.example.demo.Repository.StudentRepository;
import com.example.demo.entity.Feedback;
import com.example.demo.entity.Student;

@Service
public class FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Autowired
	StudentRepository studentRepository;
	
	
	public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

	
	 public List<Feedback> getFeedbackByStudentId(int sid) {
	        return feedbackRepository.findByStudent_Sid(sid);
	    }
	 
	public Feedback createFeedback(Feedback feedback) {
	    // Fetch the existing student from DB to avoid transient error
	    int sid = feedback.getStudent().getSid();
	    Student existingStudent = studentRepository.findById(sid)
	            .orElseThrow(() -> new RuntimeException("Student not found with sid: " + sid));

	    feedback.setStudent(existingStudent); // set the managed entity

	    return feedbackRepository.save(feedback);
	}

	public void deleteFeedback(int review_id) {
	    feedbackRepository.deleteById(review_id);
	}
}
