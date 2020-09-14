package com.sds.sds.services;

import java.util.List;
import java.util.stream.Collectors;

import com.sds.sds.dto.GameDTO;
import com.sds.sds.entities.Game;
import com.sds.sds.repositories.GameRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class GameService {

    @Autowired
    private GameRepository repository;
    
    @Transactional(readOnly = true)
    public List<GameDTO> findAll(){

        List<Game> games = repository.findAll();
        return games.stream().map(x -> new GameDTO(x)).collect(Collectors.toList());
        
    }
}