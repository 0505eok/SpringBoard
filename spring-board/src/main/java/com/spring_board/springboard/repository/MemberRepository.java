package com.spring_board.springboard.repository;

import com.spring_board.springboard.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    Member save(Member member);

    Member findById(Long id);

    Optional<Member> findByName(String name);

    List<Member> findAll();
}
