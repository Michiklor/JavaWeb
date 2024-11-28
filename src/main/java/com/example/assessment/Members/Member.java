package com.example.assessment.Members;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import java.util.List;

import javax.validation.constraints.Email;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "members")
public class Member {
    @Id
    private String id;
    @NotEmpty(message = "Name is required")
    private String name;
    private String membershipType;
    @NotEmpty(message = "Password is required") 
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    @NotEmpty(message = "Email is required") 
    @Email(message = "Email should be valid") 
    private String email;
    private List<String> registeredClasses; 
    private List<String> history;
    

    // Default Constructor
    public Member() {}

    // Constructor
    public Member(String name, String membershipType, String password ,String email) {
        this.name = name;
        this.membershipType = membershipType;
        this.password = password;
        this.email = email;  
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMembershipType() {
        return membershipType;
    }

    public void setMembershipType(String membershipType) {
        this.membershipType = membershipType;
    }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { 
        return password;
    }

    public void setPassword(String password) { 
        this.password = password;
    }
    public List<String> getRegisteredClasses() { return registeredClasses; }
    public void setRegisteredClasses(List<String> registeredClasses) { this.registeredClasses = registeredClasses; }

    public List<String> getHistory() { return history; }
    public void setHistory(List<String> history) { this.history = history; }
}
