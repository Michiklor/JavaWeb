package com.example.assessment.Instructors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instructors")
public class InstructorController {

    private final InstructorService instructorService;

    @Autowired
    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    // הוספת מדריך
    @PostMapping
    public Instructor addInstructor(@RequestBody Instructor instructor) {
        return instructorService.addInstructor(instructor);
    }

    // קבלת כל המדריכים
    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructorService.getAllInstructors();
    }
}
