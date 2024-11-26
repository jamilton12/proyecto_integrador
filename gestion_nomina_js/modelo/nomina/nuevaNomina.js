const fecha = new Date()
let fechaActual = fecha.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric' })

function nuevaNomina() {
  let nomina = JSON.parse(localStorage.getItem('nomina')) || []
  
  const lastNomina = nomina[nomina.length - 1]
  let newFecha = fechaActual 
  const newNomina = {
    documento_Emple: lastNomina.documento_Emple,
    numero_Comprobante: lastNomina.numero_Comprobante + 1,
    esta_Activa: true,
    Siclo_Nomina: lastNomina.Siclo_Nomina + 1,
    fecha_inicio: newFecha.setDate(fechaActual.getDate() + 1),
    fecha_fin: newFecha.setDate(fechaActual.getDate() + 15),
    descuento_Salud: 0,
    descuento_Pension: 0,
    valor_Nomina: 0
  }

  if (nomina.length === 0 || lastNomina.esta_Activa === true) {
    lastNomina.esta_Activa = false
    nomina.push(newNomina)
    
    localStorage.setItem('nomina', JSON.stringify(nomina))
  }
}