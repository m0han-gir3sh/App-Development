package com.student.Repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.student.Model.Subject;


@Repository
public interface SubjectRepository extends JpaRepository<Subject, Integer> {

	

	
}
