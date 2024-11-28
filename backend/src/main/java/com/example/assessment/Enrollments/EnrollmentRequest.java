package com.example.assessment.Enrollments;

public class EnrollmentRequest {
    private String memberId;
    private String classId;

    public EnrollmentRequest() {}

    public EnrollmentRequest(String memberId, String classId) {
        this.memberId = memberId;
        this.classId = classId;
    }

    // Getters and Setters
    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getClassId() {
        return classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }
}
