package com.sds.sds.repositories;

import com.sds.sds.entities.Record;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface RecordRepository extends JpaRepository<Record, Long>{
    
}