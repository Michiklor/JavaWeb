package com.example.assessment.Instructors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {
    @Autowired
    private InstructorRepository instructorRepository;

    // הוספת מדריך חדש
    public Instructor addInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    // קבלת כל המדריכים
    public List<Instructor> getAllInstructors() {
        return instructorRepository.findAll();
    }
    
    // אפשר להוסיף גם פעולות נוספות כגון עדכון ומחיקה
}
