package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistroNovedad {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 

    private long idReg;
    private Date fechaINReg;
    private String tipoNovedad;
    private String descripcionNovedad;
    private String documentoEmple;
    
    public RegistroNovedad() {
    }
    
    public long getIdReg() {
        return idReg;
    }
    public void setIdReg(long idReg) {
        this.idReg = idReg;
    }
    public Date getFechaINReg() {
        return fechaINReg;
    }
    public void setFechaINReg(Date fechaINReg) {
        this.fechaINReg = fechaINReg;
    }
    public String getTipoNovedad() {
        return tipoNovedad;
    }
    public void setTipoNovedad(String tipoNovedad) {
        this.tipoNovedad = tipoNovedad;
    }
    public String getDescripcionNovedad() {
        return descripcionNovedad;
    }
    public void setDescripcionNovedad(String descripcionNovedad) {
        this.descripcionNovedad = descripcionNovedad;
    }
    public String getDocumentoEmple() {
        return documentoEmple;
    }
    public void setDocumentoEmple(String documentoEmple) {
        this.documentoEmple = documentoEmple;
    }

    
    
}






