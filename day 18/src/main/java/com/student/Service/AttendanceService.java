// package com.student.Service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.student.Model.Attendance;
// import com.student.Repo.AttendanceRepository;

// import java.util.Date;
// import java.util.List;
// import java.util.Optional;

// @Service
// public class AttendanceService {
//     private final AttendanceRepository attendanceRepository;

//     @Autowired
//     public AttendanceService(AttendanceRepository attendanceRepository) {
//         this.attendanceRepository = attendanceRepository;
//     }

//     public List<Attendance> getAllAttendances() {
//         return attendanceRepository.findAll();
//     }

//     public List<Attendance> getAttendancesBySubject(Long subjectId) {
//         return attendanceRepository.findBySubjectId(subjectId);
//     }

//     public Optional<Attendance> getAttendanceById(Long id) {
//         return attendanceRepository.findById(id);
//     }

//     public Attendance createAttendance(Attendance attendance) {
//         return attendanceRepository.save(attendance);
//     }

//     public Attendance updateAttendance(Long id, Attendance updatedAttendance) {
//         if (attendanceRepository.existsById(id)) {
//             updatedAttendance.setId(id);
//             return attendanceRepository.save(updatedAttendance);
//         }
//         return null; // Handle error
//     }

//     public void deleteAttendance(Long id) {
//         attendanceRepository.deleteById(id);
//     }
// }
