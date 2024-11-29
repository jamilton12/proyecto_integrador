package com.javaproyecto.proyecto_integrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuarios {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario; 
    
    private String contraseña;
    private String rolUsuario;
	private String documentoEmple; 
    private Boolean activo;
    
    public Usuarios() {
    }

    public Long getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getContraseña() {
        return contraseña;
    }
    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }
    public String getRolUsuario() {
        return rolUsuario;
    }
    public void setRolUsuario(String rolUsuario) {
        this.rolUsuario = rolUsuario;
    }
    public String getDocumentoEmple() {
        return documentoEmple;
    }
    public void setDocumentoEmple(String documentoEmple) {
        this.documentoEmple = documentoEmple;
    }
    public Boolean getActivo() {
        return activo;
    }
    public void setActivo(Boolean activo) {
        this.activo = activo;
    } 

    
}
