package com.spring_board.springboard.service;

import com.spring_board.springboard.domain.Member;
import com.spring_board.springboard.repository.MemberRepository;
import com.spring_board.springboard.repository.MemoryMemberRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public class MemberService {
    public final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

    public Long join(Member member){
        checkDup(member);
        memberRepository.save(member);
        return member.getId();
    }

    private void checkDup(Member member){
        memberRepository.findByName(member.getName()).ifPresent(m -> {
            throw new IllegalStateException("이미 있는 이름입니다.");
        });
    }

    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long id){
        return memberRepository.findById(id);
    }
}
