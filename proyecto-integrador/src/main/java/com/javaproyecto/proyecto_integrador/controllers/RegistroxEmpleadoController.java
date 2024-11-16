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


import com.javaproyecto.proyecto_integrador.entities.RegistrosxEmpleados;

import com.javaproyecto.proyecto_integrador.repositories.RegistrosxEmpleadosRepository;


@RestController
@RequestMapping("/api/RegistroxEmpleado")
public class RegistroxEmpleadoController {

    @Autowired
    private RegistrosxEmpleadosRepository registrosxEmpleadosRepository;

    @GetMapping
    public ResponseEntity<List<RegistrosxEmpleados>> getAllRegistrosxEmpleados(){
        List <RegistrosxEmpleados> registrosxEmpleados = registrosxEmpleadosRepository.findAll();
        return new ResponseEntity<>(registrosxEmpleados, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegistrosxEmpleados> getRegistrosxEmpleadosById(@PathVariable Long id) {
        RegistrosxEmpleados registrosxEmpleados = registrosxEmpleadosRepository.findById(id).orElse(null);
        if (registrosxEmpleados == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(registrosxEmpleados, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RegistrosxEmpleados> createRegistrosxEmpleados(@RequestBody RegistrosxEmpleados registrosxEmpleados) {
        RegistrosxEmpleados registrosxEmpleadosSave = registrosxEmpleadosRepository.save(registrosxEmpleados);
        return new ResponseEntity<>(registrosxEmpleadosSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<RegistrosxEmpleados> updateRegistrosxEmpleados(@PathVariable Long id, @RequestBody RegistrosxEmpleados registrosxEmpleados) {
        RegistrosxEmpleados existingRegistrosxEmpleados = registrosxEmpleadosRepository.findById(id).orElse(null);
        if (existingRegistrosxEmpleados == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        registrosxEmpleados.setFecahaFINRegis(registrosxEmpleados.getFecahaFINRegis() );
        registrosxEmpleados.setFecahaINRegis(registrosxEmpleados.getFecahaFINRegis());
        registrosxEmpleados.setHoraEnRegis(registrosxEmpleados.getHoraEnRegis());
        registrosxEmpleados.setHoraSalRegis(registrosxEmpleados.getHoraSalRegis());
        
       

        

        RegistrosxEmpleados updateRegistrosxEmpleados = registrosxEmpleadosRepository.save(existingRegistrosxEmpleados);
        return new ResponseEntity<> (updateRegistrosxEmpleados, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteContrato(@PathVariable Long id) {
        registrosxEmpleadosRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

