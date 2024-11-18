package com.javaproyecto.proyecto_integrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Familiar {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFamiliar;
    private String nombreFam;
    private String apellidosFam;
    private String numeroTelFam;
    private String emailFam;

    public Familiar() {
    }
    
    public Long getIdFamiliar() {
        return idFamiliar;
    }
    public void setIdFamiliar(Long idFamiliar) {
        this.idFamiliar = idFamiliar;
    }
    public String getNombreFam() {
        return nombreFam;
    }
    public void setNombreFam(String nombreFam) {
        this.nombreFam = nombreFam;
    }
    public String getApellidosFam() {
        return apellidosFam;
    }
    public void setApellidosFam(String apellidosFam) {
        this.apellidosFam = apellidosFam;
    }
    public String getNumeroTelFam() {
        return numeroTelFam;
    }
    public void setNumeroTelFam(String numeroTelFam) {
        this.numeroTelFam = numeroTelFam;
    }
    public String getEmailFam() {
        return emailFam;
    }
    public void setEmailFam(String emailFam) {
        this.emailFam = emailFam;
    }
    
    
}