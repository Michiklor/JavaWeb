package com.example.assessment.Instructors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "instructors")
public class Instructor {
    @Id
    private String id;
    private String name;
    private String specialty; // לדוגמה: יוגה, ספינינג, פילאטיס
    private String contactInfo; // מידע על קשר עם המדריך (טלפון, דוא"ל וכו.)

    // Default Constructor
    public Instructor() {}

    // Constructor
    public Instructor(String name, String specialty, String contactInfo) {
        this.name = name;
        this.specialty = specialty;
        this.contactInfo = contactInfo;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSpecialty() { return specialty; }
    public void setSpecialty(String specialty) { this.specialty = specialty; }

    public String getContactInfo() { return contactInfo; }
    public void setContactInfo(String contactInfo) { this.contactInfo = contactInfo; }
}
