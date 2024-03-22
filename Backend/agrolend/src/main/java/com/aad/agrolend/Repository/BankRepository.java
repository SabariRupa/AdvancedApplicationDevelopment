package com.aad.agrolend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aad.agrolend.Model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long>
{
    
}
