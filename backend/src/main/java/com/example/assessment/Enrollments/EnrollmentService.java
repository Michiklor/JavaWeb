package com.example.assessment.Enrollments;
import com.example.assessment.Members.Member;
import com.example.assessment.Members.MemberService;
import com.example.assessment.Classes.GymClass;
import com.example.assessment.Classes.GymClassService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentService {

    @Autowired
    private MemberService memberService;

    @Autowired
    private GymClassService classService;

    public String enrollMemberToClass(String memberId, String classId) {
        Member member = memberService.getMemberById(memberId);
        GymClass classToRegister = classService.getClassById(classId);
    
        if (classToRegister.getRegisteredMembers() == null) {
            classToRegister.setRegisteredMembers(new ArrayList<>());
        }
    
        if (classToRegister.getRegisteredMembers().size() < classToRegister.getCapacity()) {
            classToRegister.getRegisteredMembers().add(memberId);
    
            if (member.getRegisteredClasses() == null) {
                member.setRegisteredClasses(new ArrayList<>());
            }
    
            member.getRegisteredClasses().add(classId);
    
            memberService.addMember(member);
            classService.addClass(classToRegister);
    
            System.out.println("Successfully registered memberId: " + memberId + " to classId: " + classId);
            return "Successfully registered!";
        } else {
            System.out.println("Class is full for classId: " + classId);
            return "Class is full!";
        }
    }
    public String unenrollMemberFromClass(String memberId, String classId) {
        Member member = memberService.getMemberById(memberId);
        GymClass classToUnregister = classService.getClassById(classId);

        if (classToUnregister.getRegisteredMembers() != null &&
            classToUnregister.getRegisteredMembers().contains(memberId)) {
            classToUnregister.getRegisteredMembers().remove(memberId);
        } else {
            return "Member is not registered to this class.";
        }

        if (member.getRegisteredClasses() != null &&
            member.getRegisteredClasses().contains(classId)) {
            member.getRegisteredClasses().remove(classId);
        } else {
            return "Member is not registered to this class.";
        }

        memberService.addMember(member);
        classService.addClass(classToUnregister);

        return "Successfully unenrolled!";
    }
    
}

