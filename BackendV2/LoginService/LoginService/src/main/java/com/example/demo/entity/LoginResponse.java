package com.example.demo.entity;

public class LoginResponse {
    private String message;
    private int rid;
    private String rname;
    private int uid;
    private String email;

    public LoginResponse(String message, int rid, String rname, int uid, String email) {
        this.message = message;
        this.rid = rid;
        this.rname = rname;
        this.uid = uid;
        this.email = email;
    }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

    // Getters and Setters
    
}
