package com.javaproyecto.proyecto_integrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaproyecto.proyecto_integrador.entities.Familiar;
import com.javaproyecto.proyecto_integrador.repositories.FamiliarRepository;



@RestController
@RequestMapping("/api/familiar")

public class FamiliarController {
    @Autowired
    private FamiliarRepository familiarRepository;

    @GetMapping
    public ResponseEntity<List<Familiar>> getAllFamiliars(){
        List <Familiar> familiars = familiarRepository.findAll();
        return new ResponseEntity<>(familiars, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Familiar> getFamiliarById(@PathVariable Long id) {
        Familiar familiar = familiarRepository.findById(id).orElse(null);
        if (familiar == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(familiar, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Familiar> createFamiliar(@RequestBody Familiar familiar) {
        Familiar familiarSave = familiarRepository.save(familiar);
        return new ResponseEntity<>(familiarSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Familiar> updateFamiliar(@PathVariable Long id, @RequestBody Familiar familiar) {
        Familiar existingFamiliar = familiarRepository.findById(id).orElse(null);
        if (existingFamiliar == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingFamiliar.setNombreFam(familiar.getNombreFam());
        existingFamiliar.setApellidosFam(familiar.getApellidosFam());
        existingFamiliar.setEmailFam(familiar.getEmailFam());
        existingFamiliar.setNumeroTelFam(familiar.getNumeroTelFam());

        Familiar updateFamiliar = familiarRepository.save(existingFamiliar);
        return new ResponseEntity<> (updateFamiliar, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFamiliar(@PathVariable Long id) {
        familiarRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
