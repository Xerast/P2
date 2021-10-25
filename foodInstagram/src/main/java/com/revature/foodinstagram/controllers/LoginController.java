package com.revature.foodinstagram.controllers;

import com.revature.foodinstagram.beans.User;
import com.revature.foodinstagram.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;

@RestController
@RequestMapping(path = "/login")
public class LoginController {
    private UserServices userServices;

    @Autowired
    LoginController(UserServices userServices){
        this.userServices = userServices;
    }
    @PostMapping
    public void login(@RequestBody User user){
        User u  = userServices.getByUsername(user);
        int id = u.getId();
        String cookieId = (String.valueOf(id));
        Cookie cookie = new Cookie("id", cookieId);
    }

}