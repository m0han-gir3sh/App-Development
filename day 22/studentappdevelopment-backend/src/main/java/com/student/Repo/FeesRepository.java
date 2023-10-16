package com.student.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.Model.Fees;

import java.util.List;

public interface FeesRepository extends JpaRepository<Fees, Long> {
    List<Fees> findByStudentId(Long studentId);
}
