package com.revature.foodinstagram.services;

import com.revature.foodinstagram.beans.User;
import com.revature.foodinstagram.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.plugin.dom.exception.InvalidAccessException;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Objects;

@Service
public class UserServices {

    private final UserRepo userRepo;

    @Autowired
    public UserServices(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public Boolean getByUsername(User user){
       User u =  userRepo.findByUsername(user.getUsername());
       String username = u.getUsername();
       String password = u.getPassword();
       if(Objects.equals(username, user.getUsername()) && Objects.equals(password, user.getPassword())){
           return true;
       }
       throw new InvalidAccessException("Invalid Credentials");
    }

}
