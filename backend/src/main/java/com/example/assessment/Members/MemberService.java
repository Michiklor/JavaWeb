package com.example.assessment.Members;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public Member addMember(Member member) {
        return memberRepository.save(member);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }
    public boolean authenticate(String email, String password) {
        Member member = memberRepository.findByEmail(email);
        return member != null && member.getPassword().equals(password);
    }
    public Member getMemberById(String memberId) {
        return memberRepository.findById(memberId).orElse(null);
    }
    
    
}

