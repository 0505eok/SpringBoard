package com.spring_board.springboard.controller;

import com.spring_board.springboard.domain.Member;
import com.spring_board.springboard.models.MemberForm;
import com.spring_board.springboard.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MemberController {
    private MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }

    @GetMapping("/members")
    public List<Member> allMember(){
        return memberService.findMembers();
    }

    // 필요없음
    @GetMapping("/members/{id}")
    public Member findMemberById(@PathVariable("id") Long id){
        return memberService.findOne(id);
    }

    @PostMapping("/members")
    public ResponseEntity<Void> addMember(@RequestBody MemberForm memberForm){
        Member member = new Member();
        member.setName(memberForm.name);
        memberService.join(member);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
