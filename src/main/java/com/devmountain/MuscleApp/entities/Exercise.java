package com.devmountain.MuscleApp.entities;


import com.devmountain.MuscleApp.dtos.ExerciseDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Exercises")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "text")
    private String name;

    @ManyToOne
    @JsonManagedReference
    private User user;

    public Exercise (ExerciseDto exerciseDto){
        if (exerciseDto.getName() != null){
            this.name = exerciseDto.getName();
        }

        }
    }


