package com.spring_board.springboard.service;

import com.spring_board.springboard.domain.Post;
import com.spring_board.springboard.repository.PostRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public class PostService {
    public final PostRepository postRepository;

    public PostService(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    public Long create(Post post){
        postRepository.create(post);
        return post.getId();
    }

    public List<Post> getList(String title){
        return postRepository.getList(title);
    }

    public List<Post> getAllList(){
        return postRepository.getAllList();
    }

    public Post getPost(Long id){
        return postRepository.getPost(id);
    }

    public Long update(Post post){
        postRepository.update(post);
        return post.getId();
    }

    public void delete(Post post){
        postRepository.delete(post);
        return;
    }
}
