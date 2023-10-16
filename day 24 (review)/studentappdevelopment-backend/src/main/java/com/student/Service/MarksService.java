package com.student.Service;
import com.student.Model.Marks;
import com.student.Repo.MarksRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarksService {
    @Autowired
    private MarksRepository marksRepo;

    public List<Marks> getAllMarkss() {
        return marksRepo.findAll();
    }

    public Marks getMarksById(int id) {
        return marksRepo.findById(id).orElse(null);
    }

    public Marks createMarks(Marks marks) {
        return marksRepo.save(marks);
    }

    public Marks updateMarks(int id, Marks updatedMarks) {
        if (marksRepo.existsById(id)) {
            updatedMarks.setId(id);
            return marksRepo.save(updatedMarks);
        }
        return null;
    }

    public void deleteMarks(int id) {
        marksRepo.deleteById(id);
    }

    public List<Marks> getAllMarks() {
        return null;
    }
}


















// package com.student.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.student.Model.Marks;
// import com.student.Repo.MarksRepository;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class MarksService {
//     private final MarksRepository marksRepository;

//     @Autowired
//     public MarksService(MarksRepository marksRepository) {
//         this.marksRepository = marksRepository;
//     }

//     public List<Marks> getAllMarks() {
//         return marksRepository.findAll();
//     }

//     public List<Marks> getMarksByStudent(Long studentId) {
//         return marksRepository.findByStudentId(studentId);
//     }

//     public List<Marks> getMarksBySubject(Long subjectId) {
//         return marksRepository.findBySubjectId(subjectId);
//     }

//     public Optional<Marks> getMarksById(Long id) {
//         return marksRepository.findById(id);
//     }

//     public Marks createMarks(Marks marks) {
//         return marksRepository.save(marks);
//     }

//     public Marks updateMarks(Long id, Marks updatedMarks) {
//         if (marksRepository.existsById(id)) {
//             updatedMarks.setId(id);
//             return marksRepository.save(updatedMarks);
//         }
//         return null; // Handle error
//     }

//     public void deleteMarks(Long id) {
//         marksRepository.deleteById(id);
//     }
// }
