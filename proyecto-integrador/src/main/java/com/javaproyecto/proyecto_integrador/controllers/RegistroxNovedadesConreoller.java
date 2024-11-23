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

public class RegistroxNovedadesConreoller {

    @RestController
@RequestMapping("/api/RegistroxNovedades")
public class RegistroxEmpleadoController {

    @Autowired
    private RegistroxNovedadesRepository registroxNovedadesRepository;

    @GetMapping
    public ResponseEntity<List<RegistroxNovedades>> getAllRegistroxNovedades(){
        List <RegistroxNovedades> registroxNovedades = registroxNovedadesRepository.findAll();
        return new ResponseEntity<>(registroxNovedades, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RegistroxNovedades> getRegistroxNovedadesById(@PathVariable Long id) {
        RegistroxNovedades registroxNovedades = registroxNovedadesRepository.findById(id).orElse(null);
        if (registroxNovedades == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(registroxNovedades, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<RegistroxNovedades> createRegistroxNovedades(@RequestBody RegistroxNovedades registroxNovedades) {
        RegistroxNovedades registroxNovedadesSave = registroxNovedadesRepository.save(registroxNovedades);
        return new ResponseEntity<>(registroxNovedadesSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<RegistroxNovedades> updateRegistroxNovedades(@PathVariable Long id, @RequestBody RegistroxNovedades registroxNovedades) {
        RegistroxNovedades existingRegistroxNovedades = registroxNovedadesRepository.findById(id).orElse(null);
        if (existingRegistroxNovedades == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        registroxNovedades.setIdRegNov(registroxNovedades.getIdRegNov() );
        registroxNovedades.setFecahaInNov(registroxNovedades.getFecahaInNov());
        registroxNovedades.setHoraRegNov(registroxNovedades.getHoraRegNov());
        registroxNovedades.setTipoNov(registroxNovedades.getTipoNov());
        registroxNovedades.setDescrNov(registroxNovedades.getDescrNov());
        registroxNovedades.setDocEmpl(registroxNovedades.getDocEmpl());
        
       

        

        RegistroxNovedades updateRegistroxNovedades = registroxNovedadesRepository.save(existingRegistrosxEmpleados);
        return new ResponseEntity<> (updateRegistroxNovedades, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteContrato(@PathVariable Long id) {
        registroxNovedadesRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    
   }   
}
