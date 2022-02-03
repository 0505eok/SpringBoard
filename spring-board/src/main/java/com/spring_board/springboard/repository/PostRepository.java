package com.spring_board.springboard.repository;

import com.spring_board.springboard.domain.Post;

import java.util.List;

public interface PostRepository {
    Post create(Post post);

    List<Post> getList(String title);

    List<Post> getAllList();

    Post getPost(Long id);

    Post update(Post post);

    void delete(Post post);
}
