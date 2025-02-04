package com.example.assessment.Classes;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "classes")
public class GymClass {
    @Id
    private String id;
    private String name;
    private String instructor;
    private String day; // e.g., "Monday"
    private String time; // e.g., "10:00 AM - 11:00 AM"
    private int capacity;
    private List<String> registeredMembers;

    // Default Constructor
    public GymClass() {}

    // Constructor
    public GymClass(String name, String instructor, String day, String time, int capacity) {
        this.name = name;
        this.instructor = instructor;
        this.day = day;
        this.time = time;
        this.capacity = capacity;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    public String getDay() { return day; }
    public void setDay(String day) { this.day = day; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }

    public List<String> getRegisteredMembers() { return registeredMembers; }
    public void setRegisteredMembers(List<String> registeredMembers) { this.registeredMembers = registeredMembers; }
}
