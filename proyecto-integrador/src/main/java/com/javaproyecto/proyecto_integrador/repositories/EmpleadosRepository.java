package com.javaproyecto.proyecto_integrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javaproyecto.proyecto_integrador.entities.Empleados;

public interface EmpleadosRepository extends JpaRepository<Empleados, Long> {

}
