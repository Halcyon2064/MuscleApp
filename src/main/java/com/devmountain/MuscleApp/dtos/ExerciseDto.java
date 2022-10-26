package com.devmountain.MuscleApp.dtos;


import com.devmountain.MuscleApp.entities.Exercise;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExerciseDto implements Serializable {
    private Long id;
    private String name;

    private UserDto userDto;

    public ExerciseDto (Exercise exercise){
        if(exercise.getId() != null){
            this.id = exercise.getId();
        }
        if(exercise.getName() != null){
            this.name = exercise.getName();
        }

        }
    }


