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

import com.javaproyecto.proyecto_integrador.entities.Prestaciones;

import com.javaproyecto.proyecto_integrador.repositories.PrestacionesRepository;

@RestController
@RequestMapping("/api/prestaciones")
public class PrestacionesController {
 @Autowired
    private PrestacionesRepository prestacionesRepository;

    @GetMapping
    public ResponseEntity<List<Prestaciones>> getAllPrestaciones(){
        List<Prestaciones> prestaciones = prestacionesRepository.findAll();
        return new ResponseEntity<>(prestaciones, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prestaciones> getPrestacionesById(@PathVariable Long id) {
        Prestaciones prestaciones = prestacionesRepository.findById(id).orElse(null);
        if (prestaciones == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(prestaciones, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Prestaciones> createPrestaciones(@RequestBody Prestaciones prestaciones) {
        Prestaciones prestacionesSave = prestacionesRepository.save(prestaciones);
        return new ResponseEntity<>(prestacionesSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Prestaciones> updatePresteciones(@PathVariable Long id, @RequestBody Prestaciones prestaciones) {
        Prestaciones existingPrestaciones = prestacionesRepository.findById(id).orElse(null);
        if (existingPrestaciones == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingPrestaciones.setNumeroRegistro(prestaciones.getNumeroRegistro());
        existingPrestaciones.setTipoPago(prestaciones.getTipoPago());
        existingPrestaciones.setFechaPago(prestaciones.getFechaPago());
        existingPrestaciones.setValor(prestaciones.getValor());
        existingPrestaciones.setIdEmple(prestaciones.getIdEmple());

        Prestaciones updatePrestaciones = prestacionesRepository.save(existingPrestaciones);
        return new ResponseEntity<> (updatePrestaciones, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePrestaciones(@PathVariable Long id) {
        prestacionesRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}

