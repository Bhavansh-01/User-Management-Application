package com.bhavansh.todo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bhavansh.todo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
