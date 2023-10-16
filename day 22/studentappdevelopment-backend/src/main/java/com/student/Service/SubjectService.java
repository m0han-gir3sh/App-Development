package com.student.Service;
import com.student.Model.Subject;
import com.student.Repo.SubjectRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    @Autowired
    private SubjectRepository subjectRepo;

    public List<Subject> getAllSubjects() {
        return subjectRepo.findAll();
    }

    public Subject getSubjectById(int id) {
        return subjectRepo.findById(id).orElse(null);
    }

    public Subject createSubject(Subject subject) {
        return subjectRepo.save(subject);
    }

    public Subject updateSubject(int id, Subject updatedSubject) {
        if (subjectRepo.existsById(id)) {
            updatedSubject.setId(id);
            return subjectRepo.save(updatedSubject);
        }
        return null;
    }

    public void deleteSubject(int id) {
        subjectRepo.deleteById(id);
    }
}