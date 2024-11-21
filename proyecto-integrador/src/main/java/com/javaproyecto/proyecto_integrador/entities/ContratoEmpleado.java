package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ContratoEmpleado {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroContrato;
    private String tipoContr;
    private Date FechaINContr;
    private Date FechaFinContr;
    private int pagoHoraContr;

    public ContratoEmpleado() {
    }
    
    public Long getNumeroContrato() {
        return numeroContrato;
    }
    public void setNumeroContrato(Long numeroContrato) {
        this.numeroContrato = numeroContrato;
    }
    public String getTipoContr() {
        return tipoContr;
    }
    public void setTipoContr(String tipoContr) {
        this.tipoContr = tipoContr;
    }
    public Date getFechaINContr() {
        return FechaINContr;
    }
    public void setFechaINContr(Date fechaINContr) {
        FechaINContr = fechaINContr;
    }
    public Date getFechaFinContr() {
        return FechaFinContr;
    }
    public void setFechaFinContr(Date fechaFinContr) {
        FechaFinContr = fechaFinContr;
    }
    public int getPagoHoraContr() {
        return pagoHoraContr;
    }
    public void setPagoHoraContr(int pagoHoraContr) {
        this.pagoHoraContr = pagoHoraContr;
    }

    

}
