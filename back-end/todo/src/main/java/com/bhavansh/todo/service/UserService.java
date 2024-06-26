package com.bhavansh.todo.service;

import com.bhavansh.todo.Repository.UserRepository;
import com.bhavansh.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public User addNewUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        Optional<User> user =  userRepository.findById(id);
        return user.orElse(null);
    }

    public boolean updateUser(Long id, User user) {
        Optional<User> newUser = userRepository.findById(id);
        if(newUser.isPresent()){
            User userToUpdate = newUser.get();
            userToUpdate.setEmail(user.getEmail());
            userToUpdate.setName(user.getName());
            userToUpdate.setUsername(user.getUsername());
            userRepository.save(userToUpdate);
            return true;
        }
        else{
            return false;
        }
    }

    public boolean deleteUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            userRepository.deleteById(id);
            return true;
        } else{
            return false;
        }
    }
}
