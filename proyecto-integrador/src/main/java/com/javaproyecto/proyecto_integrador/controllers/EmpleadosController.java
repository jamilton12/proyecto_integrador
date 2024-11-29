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

import com.javaproyecto.proyecto_integrador.entities.Empleados;
import com.javaproyecto.proyecto_integrador.repositories.EmpleadosRepository;


@RestController
@RequestMapping("/api/empleados")
public class EmpleadosController {
    
    @Autowired
    private EmpleadosRepository empleadosRepository;

    @GetMapping
    public ResponseEntity<List<Empleados>> getAllEmpleados(){
        List <Empleados> empleados = empleadosRepository.findAll();
        return new ResponseEntity<>(empleados, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleados> getEmpleadoById(@PathVariable Long id) {
        Empleados empleado = empleadosRepository.findById(id).orElse(null);
        if (empleado == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(empleado, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Empleados> createEmpleados(@RequestBody Empleados empleado) {
        Empleados empleadoSave = empleadosRepository.save(empleado);
        return new ResponseEntity<>(empleadoSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Empleados> updateEmpleados(@PathVariable Long id, @RequestBody Empleados empleados) {
        Empleados existingEmpleados = empleadosRepository.findById(id).orElse(null);
        if (existingEmpleados == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingEmpleados.setNombreEmple(empleados.getNombreEmple());
        existingEmpleados.setApellidosEmple(empleados.getApellidosEmple());
        existingEmpleados.setCargoEmple(empleados.getCargoEmple());
        existingEmpleados.setEdadEmplpe(empleados.getEdadEmplpe());
        existingEmpleados.setSexoEmple(empleados.getSexoEmple());
        existingEmpleados.setPaisEmple(empleados.getPaisEmple());
        existingEmpleados.setDepartamentoEmple(empleados.getDepartamentoEmple());
        existingEmpleados.setMunicipoioEmple(empleados.getMunicipoioEmple());
        existingEmpleados.setDireccionEmple(empleados.getDireccionEmple());
        existingEmpleados.setNumeroTelEmple(empleados.getNumeroTelEmple());
        existingEmpleados.setEmailEmple(empleados.getEmailEmple());
        existingEmpleados.setNumeroContrato(empleados.getNumeroContrato());


        Empleados updateEmpleados = empleadosRepository.save(existingEmpleados);
        return new ResponseEntity<> (updateEmpleados, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEmpleados(@PathVariable Long id) {
        empleadosRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
