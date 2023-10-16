package com.student.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.Model.Fees;
import com.student.Repo.FeesRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FeesService {
    private final FeesRepository feesRepository;

    @Autowired
    public FeesService(FeesRepository feesRepository) {
        this.feesRepository = feesRepository;
    }

    public List<Fees> getAllFees() {
        return feesRepository.findAll();
    }

    public List<Fees> getFeesByStudent(Long studentId) {
        return feesRepository.findByStudentId(studentId);
    }

    public Optional<Fees> getFeesById(Long id) {
        return feesRepository.findById(id);
    }

    public Fees createFees(Fees fees) {
        return feesRepository.save(fees);
    }

    public Fees updateFees(Long id, Fees updatedFees) {
        if (feesRepository.existsById(id)) {
            updatedFees.setId(id);
            return feesRepository.save(updatedFees);
        }
        return null; // Handle error
    }

    public void deleteFees(Long id) {
        feesRepository.deleteById(id);
    }
}
