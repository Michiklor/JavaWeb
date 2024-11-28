package com.example.assessment.Enrollments;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping("/register")
    public String enrollMember(@RequestBody EnrollmentRequest request) {
        return enrollmentService.enrollMemberToClass(request.getMemberId(), request.getClassId());
    }
}
