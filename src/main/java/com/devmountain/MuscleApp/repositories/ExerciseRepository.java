package com.devmountain.MuscleApp.repositories;


import com.devmountain.MuscleApp.entities.Exercise;
import com.devmountain.MuscleApp.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> findAllByUserEquals(User user);
}

