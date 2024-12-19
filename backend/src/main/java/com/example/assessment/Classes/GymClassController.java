package com.example.assessment.Classes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/classes")
public class GymClassController {
    private final GymClassService gymClassService;

    @Autowired
    public GymClassController(GymClassService gymClassService) {
        this.gymClassService = gymClassService;
    }

    @PostMapping
    public GymClass addClass(@RequestBody GymClass gymClass) {
    return gymClassService.addClass(gymClass);
}


    @GetMapping
    public List<GymClass> getAllClasses() {
        return gymClassService.getAllClasses();
    }

    @GetMapping("/{id}")
    public GymClass getClassById(@PathVariable String id) {
        return gymClassService.getClassById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteClass(@PathVariable String id) {
        gymClassService.deleteClass(id);
    }
}

