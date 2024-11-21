package com.example.assessment.Classes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GymClassService {
    private final GymClassRepository gymClassRepository;

    @Autowired
    public GymClassService(GymClassRepository gymClassRepository) {
        this.gymClassRepository = gymClassRepository;
    }

    public GymClass addClass(GymClass gymClass) {
        return gymClassRepository.save(gymClass);
    }

    public List<GymClass> getAllClasses() {
        return gymClassRepository.findAll();
    }

    public GymClass getClassById(String id) {
        return gymClassRepository.findById(id).orElse(null);
    }

    public void deleteClass(String id) {
        gymClassRepository.deleteById(id);
    }
}

