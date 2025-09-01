package com.example.demo.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="announcement")
public class Announcement {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="notice_id")
	private int noticeId;
	
	@Column(name="title")
	private String title;
	
	@Column(name="description")
	private String description;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
	@Column(name="expiry_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date expiryDate;

	public Announcement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Announcement(int noticeId, String title, String description, Date expiryDate) {
		super();
		this.noticeId = noticeId;
		this.title = title;
		this.description = description;
		this.expiryDate = expiryDate;
	}

	public int getNoticeId() {
		return noticeId;
	}

	public void setNoticeId(int noticeId) {
		this.noticeId = noticeId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Date expiryDate) {
		this.expiryDate = expiryDate;
	}

	@Override
	public String toString() {
		return "Announcement [noticeId=" + noticeId + ", title=" + title + ", description=" + description
				+ ", expiryDate" + expiryDate + "]";
	}
	
}
