package com.javaproyecto.proyecto_integrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaproyecto.proyecto_integrador.entities.RegistroNovedad;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.javaproyecto.proyecto_integrador.repositories.RegistroNovedadRepository;

@RestController
@RequestMapping("/api/RegistroNovedades")
public class RegistroNovedadController {

    @Autowired
    private RegistroNovedadRepository registroNovedadRepository;

    @GetMapping("path")
    public ResponseEntity<List<RegistroNovedad>> getAllRegistroNovedad(){
        List <RegistroNovedad> registroNovedad = registroNovedadRepository.findAll();
        return new ResponseEntity<>(registroNovedad, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegistroNovedad> getRegistroxNovedadesById(@PathVariable Long id) {
        RegistroNovedad registroNovedad = registroNovedadRepository.findById(id).orElse(null);
        if (registroNovedad == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(registroNovedad, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RegistroNovedad> createRegistroxNovedades(@RequestBody RegistroNovedad registroNovedad) {
        RegistroNovedad registroNovedadSave = registroNovedadRepository.save(registroNovedad);
        return new ResponseEntity<>(registroNovedadSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<RegistroNovedad> updateRegistroxNovedades(@PathVariable Long id, @RequestBody RegistroNovedad registroNovedad) {
        RegistroNovedad existingRegistroNovedad = registroNovedadRepository.findById(id).orElse(null);
        if (existingRegistroNovedad == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingRegistroNovedad.setTipoNovedad(registroNovedad.getTipoNovedad() );
        existingRegistroNovedad.setFechaINReg(registroNovedad.getFechaINReg());
        existingRegistroNovedad.setDescripcionNovedad(registroNovedad.getDescripcionNovedad());

        RegistroNovedad updateRegistroxNovedades = registroNovedadRepository.save(existingRegistroNovedad);
        return new ResponseEntity<> (updateRegistroxNovedades, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteContrato(@PathVariable Long id) {
        registroNovedadRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}   
