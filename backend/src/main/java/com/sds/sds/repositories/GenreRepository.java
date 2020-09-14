package com.sds.sds.repositories;

import com.sds.sds.entities.Genre;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long>{
    
}