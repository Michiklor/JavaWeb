package com.example.assessment.Instructors;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface InstructorRepository extends MongoRepository<Instructor, String> {
    // כאן אפשר להוסיף שאילתות מותאמות אישית אם נדרש
}
