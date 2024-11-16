package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prestaciones {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroRegistro;
    private String tipoPago;
    private Date fechaPago;
    private String valor;
    private Long idEmple;

    public Prestaciones() {
    }
    
    public Long getNumeroRegistro() {
        return numeroRegistro;
    }
    public void setNumeroRegistro(Long numeroRegistro) {
        this.numeroRegistro = numeroRegistro;
    }
    public String getTipoPago() {
        return tipoPago;
    }
    public void setTipoPago(String tipoPago) {
        this.tipoPago = tipoPago;
    }
    public Date getFechaPago() {
        return fechaPago;
    }
    public void setFechaPago(Date fechaPago) {
        this.fechaPago = fechaPago;
    }
    public String getValor() {
        return valor;
    }
    public void setValor(String valor) {
        this.valor = valor;
    }
    public Long getIdEmple() {
        return idEmple;
    }
    public void setIdEmple(Long idEmple) {
        this.idEmple = idEmple;
    }

    

}
