package com.example.assessment.Enrollments;
import com.example.assessment.Members.Member;
import com.example.assessment.Members.MemberService;
import com.example.assessment.Classes.GymClass;
import com.example.assessment.Classes.GymClassService;
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

        if (classToRegister.getRegisteredMembers().size() < classToRegister.getCapacity()) {
            classToRegister.getRegisteredMembers().add(memberId);
            member.getRegisteredClasses().add(classId);
            memberService.addMember(member);
            classService.addClass(classToRegister);
            return "Successfully registered!";
        } else {
            return "Class is full!";
        }
    }
}

