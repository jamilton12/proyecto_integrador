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

import com.javaproyecto.proyecto_integrador.entities.Nomina;
import com.javaproyecto.proyecto_integrador.repositories.NominaRepository;

@RestController
@RequestMapping("/api/nomina")

public class NominaController {
    @Autowired
    private NominaRepository nominaRepository;

    @GetMapping
    public ResponseEntity<List<Nomina>> getAllNomina(){
        List <Nomina> nominas = nominaRepository.findAll();
        return new ResponseEntity<>(nominas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nomina> getNominaById(@PathVariable Long id) {
        Nomina nomina = nominaRepository.findById(id).orElse(null);
        if (nomina == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(nomina, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Nomina> createNomina(@RequestBody Nomina nomina) {
        Nomina nominaSave = nominaRepository.save(nomina);
        return new ResponseEntity<>(nominaSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Nomina> updateContrato(@PathVariable Long id, @RequestBody Nomina nomina) {
        Nomina existingNomina = nominaRepository.findById(id).orElse(null);
        if (existingNomina == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingNomina.setFechaINNom(nomina.getFechaINNom());
        existingNomina.setFechaFINNom(nomina.getFechaFINNom());
        existingNomina.setHorasRegularesNom(nomina.getHorasRegularesNom());
        existingNomina.setHorasRegularesDomNom(nomina.getHorasRegularesDomNom());
        existingNomina.setHorasExtrasRegularesNom(nomina.getHorasExtrasRegularesNom());
        existingNomina.setHorasExtrasNocturnoNom(nomina.getHorasExtrasNocturnoNom());
        existingNomina.setHorasExtrasDominicalesNom(nomina.getHorasExtrasDominicalesNom());
        existingNomina.setSubsidioTransporteNom(nomina.getSubsidioTransporteNom());

        Nomina updateNomina = nominaRepository.save(existingNomina);
        return new ResponseEntity<> (updateNomina, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFamiliar(@PathVariable Long id) {
        nominaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
