package com.spring_board.springboard.controller;

import com.spring_board.springboard.domain.Member;
import com.spring_board.springboard.domain.Post;
import com.spring_board.springboard.models.PostForm;
import com.spring_board.springboard.service.MemberService;
import com.spring_board.springboard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PostController {
    private PostService postService;

    @Autowired
    public PostController(PostService postService){
        this.postService = postService;
    }

    @GetMapping("/posts/{title}")
    public List<Post> findPostByTitle(@PathVariable("title") String title){
        return postService.getList(title);
    }

    @GetMapping("/posts")
    public List<Post> findAllPost(){
        return postService.getAllList();
    }

    @PostMapping("/posts")
    public ResponseEntity<Void> createPost(@RequestBody PostForm postForm){
        Post post = new Post();
        post.setTitle(postForm.title);
        post.setContent(postForm.content);
        post.setAuth(postForm.author);
        postService.create(post);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/posts/{id}")
    public ResponseEntity<Void> updatePost(@PathVariable("id") Long id, @RequestBody PostForm postForm){
        Post post = postService.getPost(id);
        post.setTitle(postForm.title);
        post.setContent(postForm.content);
        //post.setAuthor(postForm.author);
        postService.update(post);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable("id") Long id){
        Post post = postService.getPost(id);
        postService.delete(post);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
