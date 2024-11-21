package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Nomina {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long comprovanteNom;

    private Date fechaINNom;
    private Date fechaFINNom;
    private Double horasRegularesNom;
    private Double horasRegularesDomNom;
    private Double horasExtrasRegularesNom;
    private Double horasExtrasNocturnoNom;
    private Double horasExtrasDominicalesNom;
    private Double subsidioTransporteNom;

    private Long idEmple;

    public Nomina() {
    }

    public Long getComprovanteNom() {
        return comprovanteNom;
    }

    public void setComprovanteNom(Long comprovanteNom) {
        this.comprovanteNom = comprovanteNom;
    }

    public Date getFechaINNom() {
        return fechaINNom;
    }

    public void setFechaINNom(Date fechaINNom) {
        this.fechaINNom = fechaINNom;
    }

    public Date getFechaFINNom() {
        return fechaFINNom;
    }

    public void setFechaFINNom(Date fechaFINNom) {
        this.fechaFINNom = fechaFINNom;
    }

    public Double getHorasRegularesNom() {
        return horasRegularesNom;
    }

    public void setHorasRegularesNom(Double horasRegularesNom) {
        this.horasRegularesNom = horasRegularesNom;
    }

    public Double getHorasRegularesDomNom() {
        return horasRegularesDomNom;
    }

    public void setHorasRegularesDomNom(Double horasRegularesDomNom) {
        this.horasRegularesDomNom = horasRegularesDomNom;
    }

    public Double getHorasExtrasRegularesNom() {
        return horasExtrasRegularesNom;
    }

    public void setHorasExtrasRegularesNom(Double horasExtrasRegularesDomNom) {
        this.horasExtrasRegularesNom = horasExtrasRegularesDomNom;
    }

    public Double getHorasExtrasNocturnoNom() {
        return horasExtrasNocturnoNom;
    }

    public void setHorasExtrasNocturnoNom(Double horasExtrasNocturnoNom) {
        this.horasExtrasNocturnoNom = horasExtrasNocturnoNom;
    }

    public Double getHorasExtrasDominicalesNom() {
        return horasExtrasDominicalesNom;
    }

    public void setHorasExtrasDominicalesNom(Double horasExtrasDominicalesNom) {
        this.horasExtrasDominicalesNom = horasExtrasDominicalesNom;
    }

    public Double getSubsidioTransporteNom() {
        return subsidioTransporteNom;
    }

    public void setSubsidioTransporteNom(Double subsidioTransporteNom) {
        this.subsidioTransporteNom = subsidioTransporteNom;
    }

    public Long getIdEmple() {
        return idEmple;
    }

    public void setIdEmple(Long idEmple) {
        this.idEmple = idEmple;
    }
    

    
}
