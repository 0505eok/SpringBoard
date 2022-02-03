package com.spring_board.springboard.controller;

import com.spring_board.springboard.models.Home;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/home")
    public Home home(){
        Home h = new Home();
        h.name = "home";
        return h;
    }
}
