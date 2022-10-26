package com.devmountain.MuscleApp.services;

import com.devmountain.MuscleApp.dtos.ExerciseDto;
import com.devmountain.MuscleApp.entities.Exercise;
import com.devmountain.MuscleApp.entities.User;
import com.devmountain.MuscleApp.repositories.ExerciseRepository;
import com.devmountain.MuscleApp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;
    @Autowired
    private UserRepository userRepository;



    @Override
    public List<ExerciseDto> getAllExercisesByUserId(Long userId){
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()){
            List<Exercise> exerciseList = exerciseRepository.findAllByUserEquals(userOptional.get());
            return exerciseList.stream().map(note -> new ExerciseDto(note)).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }
    @Override
    @Transactional
    public void addExercise(ExerciseDto exerciseDto, Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        Exercise exercise = new Exercise(exerciseDto);
        userOptional.ifPresent(exercise::setUser);
        exerciseRepository.saveAndFlush(exercise);
    }



    }

