package com.example.assessment.Classes;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "classes")
public class GymClass {
    @Id
    private String id;
    private String name;
    private String instructor;
    private String schedule; // e.g., "Monday 10:00 AM - 11:00 AM"
    private int capacity;

    // Default Constructor
    public GymClass() {}

    // Constructor
    public GymClass(String name, String instructor, String schedule, int capacity) {
        this.name = name;
        this.instructor = instructor;
        this.schedule = schedule;
        this.capacity = capacity;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    public String getSchedule() { return schedule; }
    public void setSchedule(String schedule) { this.schedule = schedule; }

    public int getCapacity() { return capacity; }
    public void setCapacity(int capacity) { this.capacity = capacity; }
}
