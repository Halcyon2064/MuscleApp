package com.devmountain.MuscleApp.controllers;


import com.devmountain.MuscleApp.dtos.ExerciseDto;
import com.devmountain.MuscleApp.services.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/Exercises")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping("/user/{userId}")
    public List<ExerciseDto> getExercisesByUser(@PathVariable Long userId){
        return exerciseService.getAllExercisesByUserId(userId);
    }

    @PostMapping("/user/{userId}")
    public void addExercise(@RequestBody ExerciseDto exerciseDto,@PathVariable Long userId){
        exerciseService.addExercise(exerciseDto, userId);
    }

}
