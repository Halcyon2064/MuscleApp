package com.devmountain.MuscleApp.services;

import com.devmountain.MuscleApp.dtos.ExerciseDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ExerciseService {

    List<ExerciseDto> getAllExercisesByUserId(Long userId);

    @Transactional
    void addExercise(ExerciseDto exerciseDto, Long userId);
}
