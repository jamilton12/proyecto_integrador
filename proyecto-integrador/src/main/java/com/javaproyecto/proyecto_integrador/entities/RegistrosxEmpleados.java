package com.javaproyecto.proyecto_integrador.entities;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistrosxEmpleados {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdRegistro;
    private Date fecahaINRegis;
    private Date fecahaFINRegis;
    private Time horaEnRegis;
    private Time horaSalRegis;

    private Long idEmpl;

    public RegistrosxEmpleados() {
    }

    public Long getIdRegistro() {
        return IdRegistro;
    }

    public void setIdRegistro(Long idRegistro) {
        IdRegistro = idRegistro;
    }

    public Date getFecahaINRegis() {
        return fecahaINRegis;
    }

    public void setFecahaINRegis(Date fecahaINRegis) {
        this.fecahaINRegis = fecahaINRegis;
    }

    public Date getFecahaFINRegis() {
        return fecahaFINRegis;
    }

    public void setFecahaFINRegis(Date fecahaFINRegis) {
        this.fecahaFINRegis = fecahaFINRegis;
    }

    public Time getHoraEnRegis() {
        return horaEnRegis;
    }

    public void setHoraEnRegis(Time horaEnRegis) {
        this.horaEnRegis = horaEnRegis;
    }

    public Time getHoraSalRegis() {
        return horaSalRegis;
    }

    public void setHoraSalRegis(Time horaSalRegis) {
        this.horaSalRegis = horaSalRegis;
    }

    public Long getIdEmpl() {
        return idEmpl;
    }

    public void setIdEmpl(Long idEmpl) {
        this.idEmpl = idEmpl;
    }
    
    


}
