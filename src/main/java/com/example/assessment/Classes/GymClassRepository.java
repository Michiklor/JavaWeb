package com.example.assessment.Classes;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface GymClassRepository extends MongoRepository<GymClass, String> {
}
