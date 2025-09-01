//package com.example.demo.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.example.demo.entity.RegisterDummy;
//import com.example.demo.entity.Role;
//import com.example.demo.entity.User;
//import com.example.demo.repository.RoleRepository;
//import com.example.demo.repository.UserRepository;
//
//@Service
//public class UserService {
//	
//	@Autowired
//	UserRepository urepo;
//	
//	 @Autowired
//	 RoleRepository rrepo;  // ✅ Add this
//
//	
//	public List<User> getAll(){
//		return urepo.findAll();
//	}
//	
//	public User getUser(String email, String password) {
//		return urepo.checkLogin(email, password);
//	}
//	
////    public User saveOne(RegisterDummy d) {
////        System.out.println("Role Id: " + d.getRid());
////
////        // ✅ Fetch Role from DB
////        Role role = rrepo.findById(d.getRid())
////                         .orElseThrow(() -> new RuntimeException("Invalid Role ID"));
////
////        User u = new User();
////        u.setUname(d.getUname());
////        u.setEmail(d.getEmail());
////        u.setPassword(d.getPassword());
////        u.setPhone_no(d.getPhone_no());
////        u.setRole(role);  // ✅ Set role object
////
////        System.out.println("User object: " + u);
////        return urepo.save(u);  // ✅ Save and return
////    }
//	
//	
//	public User register(RegisterDummy dummy) {
//        User user = new User();
//        user.setUname(dummy.getUname());
//        user.setEmail(dummy.getEmail());
//        user.setPhone_no(dummy.getPhone_no());
//        user.setPassword(dummy.getPassword());
//
//        Role role = rrepo.findById(dummy.getRid()).orElse(null);
//        if (role != null) {
//            user.setRole(role);
//        }
//
//        return urepo.save(user);
//    }
//}



package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RegisterDummy;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository urepo;

    @Autowired
    RoleRepository rrepo;

    public List<User> getAll() {
        return urepo.findAll();
    }

    public User getUser(String email, String password) {
        return urepo.checkLogin(email, password);
    }

    public User register(RegisterDummy dummy) {
        User user = new User();
        user.setUname(dummy.getUname());
        user.setEmail(dummy.getEmail());
        user.setPhone_no(dummy.getPhone_no());
        user.setPassword(dummy.getPassword());

        Role role = rrepo.findById(dummy.getRid()).orElseThrow(
            () -> new RuntimeException("Invalid Role ID")
        );

        user.setRole(role);
        return urepo.save(user);
    }
}
