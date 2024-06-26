package com.bhavansh.todo.controller;

import com.bhavansh.todo.model.User;
import com.bhavansh.todo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<String> addUser(@RequestBody User user){
        User newUser = userService.addNewUser(user);
        if(newUser!=null){
            return new ResponseEntity<>("New User Added Successfully!!!", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("New User Not Added!!!",HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<User>> getAllUser(){
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User newUser = userService.getUserById(id);
        if(newUser!=null){
            return new ResponseEntity<>(newUser,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User user){
        boolean isUpdated = userService.updateUser(id,user);
        if(isUpdated){
            return new ResponseEntity<>("Updated Successfully!!!",HttpStatus.CREATED);
        } else{
            return new ResponseEntity<>("Please give valid Input!!!",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable Long id){
        boolean isDeleted = userService.deleteUserById(id);
        if(isDeleted){
            return new ResponseEntity<>("Deleted Successfully!!!",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("User not found!!!",HttpStatus.NOT_FOUND);
        }
    }
}
