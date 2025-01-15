package com.example.assessment.Members;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public Member addMember(@RequestBody Member member) {
        return memberService.addMember(member);
    }


    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }
    @CrossOrigin(origins = "http://localhost:3000")
@PostMapping("/login")
public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
    Member member = memberService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
    Map<String, String> response = new HashMap<>();
    if (member != null) { 
        
        response.put("message", "Login successful!");
        response.put("username", member.getName()); 
        response.put("memberId", member.getId()); 
        return ResponseEntity.ok()
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(response);  
    } else {
        response.put("message", "Invalid credentials");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .contentType(MediaType.APPLICATION_JSON)
                             .body(response);  
    }
}

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody Member member) {
        Map<String, String> response = new HashMap<>();
        
        try {
            memberService.addMember(member); 
            response.put("message", "Registration successful!");
            return ResponseEntity.status(HttpStatus.CREATED)
                                 .contentType(MediaType.APPLICATION_JSON)
                                 .body(response);
        } catch (Exception e) {
            response.put("message", "Registration failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .contentType(MediaType.APPLICATION_JSON)
                                 .body(response);
        }
    }
    
}
