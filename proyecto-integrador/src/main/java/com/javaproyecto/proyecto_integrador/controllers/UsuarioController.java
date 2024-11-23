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

import com.javaproyecto.proyecto_integrador.entities.Usuarios;
import com.javaproyecto.proyecto_integrador.repositories.UsuariosRepository;


@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
 @Autowired
      private UsuariosRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<List<Usuarios>> getAllUsuario(){
        List<Usuarios> usuario = usuarioRepository.findAll();
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuarios> getUsuarioById(@PathVariable Long id) {
        Usuarios usuario = usuarioRepository.findById(id).orElse(null);
        if (usuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Usuarios> createUsuario(@RequestBody Usuarios usuario) {
        Usuarios usuarioSave = usuarioRepository.save(usuario);
        return new ResponseEntity<>(usuarioSave, HttpStatus.CREATED);
    }
    

    @PutMapping("/{id}")
    public ResponseEntity<Usuarios> updateUsuario(@PathVariable Long id, @RequestBody Usuarios usuario) {
        Usuarios existingUsuario = usuarioRepository.findById(id).orElse(null);
        if (existingUsuario == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingUsuario.setContraseña(usuario.getContraseña());
        existingUsuario.setRolUsuario(usuario.getRolUsuario());
        existingUsuario.setActivo(usuario.getActivo());

        Usuarios updateUsuario = usuarioRepository.save(existingUsuario);
        return new ResponseEntity<> (updateUsuario, HttpStatus.OK);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUsuario(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
