package com.javaproyecto.proyecto_integrador.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaproyecto.proyecto_integrador.entities.ContratoEmpleado;
import com.javaproyecto.proyecto_integrador.repositories.ContratoEmpleadoRepository;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/productos")
public class ContratoEmpleadosController {

    @Autowired
    private ContratoEmpleadoRepository contratoEmpleadosRepository;

    @GetMapping
    public ResponseEntity<List<ContratoEmpleado>> getAllContratoEmpleados(){
        List <ContratoEmpleado> contratos = contratoEmpleadosRepository.findAll();
        return new ResponseEntity<>(contratos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContratoEmpleado> getContratoById(@PathVariable Long id) {
        ContratoEmpleado contrato = contratoEmpleadosRepository.findById(id).orElse(null);
        if (contrato == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(contrato, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ContratoEmpleado> createContrato(@RequestBody ContratoEmpleado contratoEpleado) {
        ContratoEmpleado contrato = contratoEmpleadosRepository.save(contratoEpleado);
        return new ResponseEntity<>(contrato, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<ContratoEmpleado> updateContrato(@PathVariable Long id, @RequestBody ContratoEmpleado contratoEpleado) {
        ContratoEmpleado existingContrato = contratoEmpleadosRepository.findById(id).orElse(null);
        if (existingContrato == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingContrato.setTipoContr(contratoEpleado.getTipoContr());
        existingContrato.setFechaINContr(contratoEpleado.getFechaINContr());
        existingContrato.setFechaFinContr(contratoEpleado.getFechaFinContr());
        existingContrato.setPagoHoraContr(contratoEpleado.getPagoHoraContr());

        ContratoEmpleado updateContrato = contratoEmpleadosRepository.save(existingContrato);
        return new ResponseEntity<> (updateContrato, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteContrato(@PathVariable Long id) {
        contratoEmpleadosRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
