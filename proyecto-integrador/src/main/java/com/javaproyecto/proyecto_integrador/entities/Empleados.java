package com.javaproyecto.proyecto_integrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Empleados {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long idEmple;
    private String nombreEmple;
    private String apellidosEmple;
    private String cargoEmple;
    private int edadEmplpe;
    private String paisEmple; 
    private String departamentoEmple; 
    private String municipoioEmple; 
    private String direccionEmple; 
    private String numeroTelEmple; 
    private String emailEmple; 
    private String numeroContrato;

    public Empleados() {
    }

    
    public Long getIdEmple() {
        return idEmple;
    }
    public void setIdEmple(Long idEmple) {
        this.idEmple = idEmple;
    }
    public String getNombreEmple() {
        return nombreEmple;
    }
    public void setNombreEmple(String nombreEmple) {
        this.nombreEmple = nombreEmple;
    }
    public String getApellidosEmple() {
        return apellidosEmple;
    }
    public void setApellidosEmple(String apellidosEmple) {
        this.apellidosEmple = apellidosEmple;
    }
    public String getCargoEmple() {
        return cargoEmple;
    }
    public void setCargoEmple(String cargoEmple) {
        this.cargoEmple = cargoEmple;
    }
    public int getEdadEmplpe() {
        return edadEmplpe;
    }
    public void setEdadEmplpe(int edadEmplpe) {
        this.edadEmplpe = edadEmplpe;
    }
    public String getPaisEmple() {
        return paisEmple;
    }
    public void setPaisEmple(String paisEmple) {
        this.paisEmple = paisEmple;
    }
    public String getDepartamentoEmple() {
        return departamentoEmple;
    }
    public void setDepartamentoEmple(String departamentoEmple) {
        this.departamentoEmple = departamentoEmple;
    }
    public String getMunicipoioEmple() {
        return municipoioEmple;
    }
    public void setMunicipoioEmple(String municipoioEmple) {
        this.municipoioEmple = municipoioEmple;
    }
    public String getDireccionEmple() {
        return direccionEmple;
    }
    public void setDireccionEmple(String direccionEmple) {
        this.direccionEmple = direccionEmple;
    }
    public String getNumeroTelEmple() {
        return numeroTelEmple;
    }
    public void setNumeroTelEmple(String numeroTelEmple) {
        this.numeroTelEmple = numeroTelEmple;
    }
    public String getEmailEmple() {
        return emailEmple;
    }
    public void setEmailEmple(String emailEmple) {
        this.emailEmple = emailEmple;
    }
    public String getNumeroContrato() {
        return numeroContrato;
    }
    public void setNumeroContrato(String numeroContrato) {
        this.numeroContrato = numeroContrato;
    } 
    
    

}
