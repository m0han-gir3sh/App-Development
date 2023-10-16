package com.student.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.student.Model.Fees;
import com.student.Service.FeesService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fees")
public class FeesController {
    private final FeesService feesService;

    @Autowired
    public FeesController(FeesService feesService) {
        this.feesService = feesService;
    }

    @GetMapping
    public List<Fees> getAllFees() {
        return feesService.getAllFees();
    }

    @GetMapping("/student/{studentId}")
    public List<Fees> getFeesByStudent(@PathVariable Long studentId) {
        return feesService.getFeesByStudent(studentId);
    }

    @GetMapping("/{id}")
    public Optional<Fees> getFeesById(@PathVariable Long id) {
        return feesService.getFeesById(id);
    }

    @PostMapping
    public Fees createFees(@RequestBody Fees fees) {
        return feesService.createFees(fees);
    }

    @PutMapping("/{id}")
    public Fees updateFees(@PathVariable Long id, @RequestBody Fees updatedFees) {
        return feesService.updateFees(id, updatedFees);
    }

    @DeleteMapping("/{id}")
    public void deleteFees(@PathVariable Long id) {
        feesService.deleteFees(id);
    }
}
