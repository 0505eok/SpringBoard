package com.spring_board.springboard.service;

import com.spring_board.springboard.domain.Member;
import com.spring_board.springboard.repository.MemberRepository;
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

    public Member login(Member member){
        Member ret = checkPassword(member);
        return ret;
    }

    private void checkDup(Member member){
        Member ret = memberRepository.findByName(member.getName());
        if(ret != null){
            throw new IllegalStateException("이미 있는 이름입니다.");
        };
    }

    private Member checkPassword(Member member){
        Member mem= memberRepository.findByName(member.getName());
        if(mem == null){
            throw new IllegalStateException("아이디가 존재하지 않습니다.");
        }
        if(!mem.getPassword().equals(member.getPassword())){
            throw new IllegalStateException("비밀번호가 일치하지 않습니다.");
        }
        return mem;
    }

    public List<Member> findMembers(){
        return memberRepository.findAll();
    }

    public Member findOne(Long id){
        return memberRepository.findById(id);
    }
}
