package com.student.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.Constant.Api;
import com.student.Model.Marks;
import com.student.Service.MarksService;


@RestController
@RequestMapping(Api.ADMIN)
public class MarksController {
    @Autowired
    private MarksService marksService;
    // @GetMapping("/")
    // private String index(){
    //     return "Hii Admin";
    // }
    @GetMapping("/getmarks")
    public List<Marks> getAllMarks() {
        return marksService.getAllMarkss();
    }

    @GetMapping("/getmarks/{id}")
    public Marks getMarksById(@PathVariable int id) {
        return marksService.getMarksById(id);
    }

    @PostMapping("/postmarks")
    public Marks createMarks(@RequestBody Marks marks) {
        return marksService.createMarks(marks);
    }

    @PutMapping("/putmarks/{id}")
    public Marks updateMarks(@PathVariable int id, @RequestBody Marks updatedMarks) {
        return marksService.updateMarks(id, updatedMarks);
    }

    @DeleteMapping("/deletemarks/{id}")
    public void deleteMarks(@PathVariable int id) {
        marksService.deleteMarks(id);
    }
}















// package com.student.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.*;

// import com.student.Model.Marks;
// import com.student.Service.MarksService;

// import java.util.List;
// import java.util.Optional;

// @RestController
// @RequestMapping("/marks")
// public class MarksController {
//     private final MarksService marksService;

//     @Autowired
//     public MarksController(MarksService marksService) {
//         this.marksService = marksService;
//     }

//     @GetMapping
//     public List<Marks> getAllMarks() {
//         return marksService.getAllMarks();
//     }

//     @GetMapping("/student/{studentId}")
//     public List<Marks> getMarksByStudent(@PathVariable Long studentId) {
//         return marksService.getMarksByStudent(studentId);
//     }

//     @GetMapping("/subject/{subjectId}")
//     public List<Marks> getMarksBySubject(@PathVariable Long subjectId) {
//         return marksService.getMarksBySubject(subjectId);
//     }

//     @GetMapping("/{id}")
//     public Optional<Marks> getMarksById(@PathVariable Long id) {
//         return marksService.getMarksById(id);
//     }

//     @PostMapping
//     public Marks createMarks(@RequestBody Marks marks) {
//         return marksService.createMarks(marks);
//     }

//     @PutMapping("/{id}")
//     public Marks updateMarks(@PathVariable Long id, @RequestBody Marks updatedMarks) {
//         return marksService.updateMarks(id, updatedMarks);
//     }

//     @DeleteMapping("/{id}")
//     public void deleteMarks(@PathVariable Long id) {
//         marksService.deleteMarks(id);
//     }
// }
