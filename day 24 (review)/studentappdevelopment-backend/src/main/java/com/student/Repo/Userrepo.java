package com.student.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.Model.User;


public interface Userrepo  extends JpaRepository<User,String>{


  User findUserByEmail(String email);
Optional<User> findByEmail(String email);
  User findUserById(String id);


}
