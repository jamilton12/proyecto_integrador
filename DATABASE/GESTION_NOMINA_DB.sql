DROP DATABASE GESTION_NOMINA;

CREATE DATABASE GESTION_NOMINA;

USE GESTION_NOMINA;

CREATE TABLE CONTRATO_EMPLEADOS (
	Numero_Cont VARCHAR(25) PRIMARY KEY NOT NULL,
    Tipo_Cont VARCHAR(25) NOT NULL,
    PagoHora_Cont VARCHAR(25) NOT NULL,
    FechaIN_Cont DATE NOT NULL,
    FechaFIN_Cont DATE NOT NULL,
    Activo BOOLEAN NOT NULL
);

CREATE TABLE EMPLEADOS (
	Documento_Emple VARCHAR(25) PRIMARY KEY NOT NULL,
    Nombre_Emple VARCHAR(25) NOT NULL,
    Apellidos_Emple VARCHAR(25) NOT NULL,
    Url_Foto_Emple VARCHAR(25) NOT NULL,
    Cargo_Emple VARCHAR(25) NOT NULL,
    Edad_Emple INT NOT NULL,
    Sexo_Emple VARCHAR(25) NOT NULL,
    Pais_Emple VARCHAR(25) NOT NULL,
    Departamento_Emple VARCHAR(25) NOT NULL,
    Municipio_Emple VARCHAR(25) NOT NULL,
    Direccion_Emple VARCHAR(25) NOT NULL,
    NumeroTel_Emple VARCHAR(25) NOT NULL,
    Email_Emple VARCHAR(25) NOT NULL,
    Activo BOOLEAN NOT NULL,
    Numero_Contrato VARCHAR(25) NOT NULL,
    CONSTRAINT PK_CONTRATO_EMPLEADOS FOREIGN KEY 
	(Numero_Contrato) REFERENCES CONTRATO_EMPLEADOS (Numero_Cont)
);

CREATE TABLE FAMILIAR (
	Documento_Familia VARCHAR(25) PRIMARY KEY NOT NULL,
    Nombre_Familia VARCHAR(25) NOT NULL,
    Apellidos_Familia VARCHAR(25) NOT NULL,
    NumeroTel_Familia VARCHAR(25) NOT NULL,
    Email_Familia VARCHAR(25) NOT NULL
);

CREATE TABLE PRESTACIONES ( 
	Numero_Resgistro VARCHAR(25) NOT NULL PRIMARY KEY,
    Tipo_Pago VARCHAR(25) NOT NULL,
    Fecha_Pago DATE NOT NULL,
    VALOR FLOAT NOT NULL, 	
	
    Documento_Emple VARCHAR(25)  NOT NULL,
    
	CONSTRAINT PK_EMPLEADOS_PRESTACIONES FOREIGN KEY 
	(Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple)
);

CREATE TABLE NOMINA (
	NumeroComprovante_Nom VARCHAR(25) NOT NULL PRIMARY KEY,
    FechaIN_Nom DATE NOT NULL,
    FechaFIN_Nom DATE NOT NULL,
    HorasRegulares_Nom INT NOT NULL,
    HorasRegularesDOM_Nom INT NOT NULL,
    HorasExtrasRegulares_Nom INT NOT NULL,
    HorasExtrasNoctucnas_Nom INT NOT NULL,
    HorasExtrasDominicales_Nom INT NOT NULL,
    SubsidioTransporte_Nom FLOAT NOT NULL,
    Siclo_Nom INT NOT NULL,
    Activa_Nom BOOLEAN NOT NULL,
    
	Documento_Emple VARCHAR(25)  NOT NULL,
    
	CONSTRAINT PK_EMPLEADOS_NOMINA FOREIGN KEY 
	(Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple)
);

CREATE TABLE REGISTRO_EMPLEADO (
	ID_REGISTRO INT NOT NULL PRIMARY KEY,
    FechaIN_Reg DATE NOT NULL,
	FechaSAL_Reg DATE,
    HoraEN_Reg DATETIME NOT NULL,
    HoraSAL_Reg DATETIME, 
    Activo BOOLEAN NOT NULL,
	Documento_Emple VARCHAR(25)  NOT NULL,
    
	CONSTRAINT PK_EMPLEADOS_REGISTRO FOREIGN KEY 
	(Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple)
);

CREATE TABLE REGISTRO_NOVEDADES (
    ID_REGISTRO INT NOT NULL PRIMARY KEY,
    FechaIN_Reg DATE NOT NULL,
    Hora_Reg DATETIME NOT NULL,
    Tipo_Novedad VARCHAR(25) NOT NULL,
    Descripcion_Novedad VARCHAR(25) NOT NULL,
    Documento_Emple VARCHAR(25)  NOT NULL,
    
    CONSTRAINT PK_EMPLEADOS_REGISTRO FOREIGN KEY 
    (Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple)
);

CREATE TABLE USUARIOS (
    ID_USUARIO INT NOT NULL PRIMARY KEY,
    Contraseña VARCHAR(25) NOT NULL,
    
	Documento_Emple VARCHAR(25)  NOT NULL,
    
    Activo BOOLEAN NOT NULL, 
    
    CONSTRAINT PK_EMPLEADOS_USUARIOS FOREIGN KEY 
    (Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple)
);

CREATE TABLE FAMILIARxEMPLEADOS (
	Documento_Emple VARCHAR(25)  NOT NULL,
    
	CONSTRAINT PK_EMPLEADOSxFAMILIAR FOREIGN KEY 
	(Documento_Emple) REFERENCES EMPLEADOS (Documento_Emple),
    
	Documento_Familia VARCHAR(25)  NOT NULL,
    
	CONSTRAINT PK_FAMILIARxEMPLEADO FOREIGN KEY 
	(Documento_Familia) REFERENCES FAMILIAR (Documento_Familia),
    
    PRIMARY KEY(Documento_Familia, Documento_Emple),
    
    ParetescoFamiliar VARCHAR(25) NOT NULL
)


