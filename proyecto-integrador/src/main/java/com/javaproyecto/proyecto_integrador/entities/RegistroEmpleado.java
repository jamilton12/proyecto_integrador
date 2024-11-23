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

    public long getIdRge(){
        return idReg;
    }

    public void setIdReg(long idRerg) {
        this.idReg = idReg;
    }

    public Date getFechaINReg(){
        return fechaINReg;
    }

    public void setFechaINReg(Date fechaINReg){
        this.fechaINReg = fechaINReg;
    }

    public Date getFechaSAlReg(){
        return fechaSAlReg;
    }

    public void setFechaSAlReg(Date fechaSAlReg){
        this.fechaSAlReg = fechaSAlReg;
    }

    public double getHoraENReg(){
        return horaENReg;
    }

    public void setHoraENReg(double horaENReg){
        this.horaENReg = horaENReg;
    }

    public double HoraSALReg(){
        return horaSALReg;
    }

    public void setHoraSALReg(double horaSALReg){
        this.horaSALReg = horaSALReg;
    }
}






