package com.student.Repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.student.Model.Marks;


@Repository
public interface MarksRepository extends JpaRepository<Marks, Integer> {

	

	
}







// package com.student.Repo;
// import org.springframework.data.jpa.repository.JpaRepository;

// import com.student.Model.Marks;

// import java.util.List;

// public interface MarksRepository extends JpaRepository<Marks, Long> {
//     List<Marks> findByStudentId(Long studentId);
//     List<Marks> findBySubjectId(Long subjectId);
// }
