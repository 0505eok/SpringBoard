package com.spring_board.springboard.repository;

import com.spring_board.springboard.domain.Member;
import com.spring_board.springboard.domain.Post;
import com.spring_board.springboard.models.PostForm;

import javax.persistence.EntityManager;
import java.util.List;

public class JpaPostRepository implements PostRepository {
    private final EntityManager em;

    public JpaPostRepository(EntityManager em){
        this.em = em;
    }

    @Override
    public Post create(Post post) {
        em.persist(post);
        return post;
    }

    @Override
    public List<Post> getList(String title) {
        List<Post> result = em.createQuery("select m from POST m where m.title like concat('%',:title,'%')", Post.class)
                .setParameter("title", title)
                .getResultList();
        return result;
    }

    @Override
    public List<Post> getAllList(){
        List<Post> result = em.createQuery("select m from POST m", Post.class)
                .getResultList();
        return result;
    }

    @Override
    public Post getPost(Long id) {
        Post post = em.find(Post.class, id);
        return post;
    }

    @Override
    public Post update(Post post) {
        em.merge(post);
        return post;
    }

    @Override
    public void delete(Post post) {
        em.remove(post);
        return;
    }
}
