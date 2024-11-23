package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistroEmpleado {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) 

    private long idReg;
    private Date fechaINReg;
    private Date fechaSALReg;
    private Double horaENReg;
	private Double horaSALReg; 
    
    public RegistroEmpleado() {
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
    public Date getFechaSAlReg() {
        return fechaSALReg;
    }
    public void setFechaSAlReg(Date fechaSAlReg) {
        this.fechaSALReg = fechaSAlReg;
    }
    public Double getHoraENReg() {
        return horaENReg;
    }
    public void setHoraENReg(Double horaENReg) {
        this.horaENReg = horaENReg;
    }
    public Double getHoraSALReg() {
        return horaSALReg;
    }
    public void setHoraSALReg(Double horaSALReg) {
        this.horaSALReg = horaSALReg;
    }
}






