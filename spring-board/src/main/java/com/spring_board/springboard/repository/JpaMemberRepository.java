package com.spring_board.springboard.repository;

import com.spring_board.springboard.domain.Member;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

public class JpaMemberRepository implements MemberRepository{
    private final EntityManager em;

    public JpaMemberRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public Member save(Member member) {
        em.persist(member);
        return member;
    }

    @Override
    public Member findById(Long id) {
        Member member = em.find(Member.class, id);
        return member;
    }

    @Override
    public Member findByName(String name) {
        List<Member> result = em.createQuery("select m from MEMBER m where m.name = :name", Member.class)
                .setParameter("name", name)
                .getResultList();
        if(result.size() != 0)
            return result.get(0);
        else
            return null;
    }

    @Override
    public List<Member> findAll() {
        List<Member> result = em.createQuery("select m from MEMBER m", Member.class)
                .getResultList();
        return result;
    }
}
