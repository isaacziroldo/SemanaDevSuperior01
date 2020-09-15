package com.sds.sds.services;

import java.time.Instant;

import com.sds.sds.dto.RecordDTO;
import com.sds.sds.dto.RecordInsertDTO;
import com.sds.sds.entities.Game;
import com.sds.sds.entities.Record;
import com.sds.sds.repositories.GameRepository;
import com.sds.sds.repositories.RecordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecordService {
    

    @Autowired
    private RecordRepository repository;
    
    @Autowired
    private GameRepository gameRepository;

    public RecordDTO insert(RecordInsertDTO dto){
        Record entity = new Record();
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());
        
        Game game = gameRepository.getOne(dto.getGameId());
        entity.setGame(game);

        entity = repository.save(entity);

        return new RecordDTO(entity); 
    }
}

