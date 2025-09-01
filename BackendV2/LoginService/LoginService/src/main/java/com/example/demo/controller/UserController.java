package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.LoginResponse;
import com.example.demo.entity.RegisterDummy;
import com.example.demo.entity.User;
import com.example.demo.entity.UserInfo;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService uservice;

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return uservice.getAll();
    }

    @PostMapping("/login")
    public ResponseEntity<?> checkLogin(@RequestBody UserInfo uinfo) {
        User user = uservice.getUser(uinfo.getEmail(), uinfo.getPassword());

        if (user != null) {
            LoginResponse res = new LoginResponse(
                "Login successful",
                user.getRole().getRid(),
                user.getRole().getRname(),
                user.getUid(),
                user.getEmail()
            );
            return ResponseEntity.ok(res);
        } else {
            LoginResponse res = new LoginResponse(
                "Login failed",
                -1,
                "none",
                -1,
                "invalid"
            );
            return ResponseEntity.status(401).body(res);
        }
    }
    
//    @PostMapping("/login")
//    public LoginResponse checklogin(@RequestBody UserInfo uinfo) {
//        User user = uservice.getUser(uinfo.getEmail(), uinfo.getPassword());
//
//        if (user != null) {
//            return new LoginResponse(
//                "Login successful",
//                user.getRole().getRid(),
//                user.getRole().getRname(),
//                user.getUid(),
//                user.getEmail()
//            );
//        } else {
//            return new LoginResponse("Login failed", -1, "none", -1, "invalid");
//        }
//    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDummy dummy) {
        try {
            User savedUser = uservice.register(dummy);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body("Error: " + ex.getMessage());
        }
    }
}

