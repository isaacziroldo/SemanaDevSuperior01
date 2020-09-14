package com.sds.sds.repositories;

import com.sds.sds.entities.Game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface GameRepository extends JpaRepository<Game, Long>{
    
}