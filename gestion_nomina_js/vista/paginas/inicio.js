import { SectionArticulo } from "../components/home/SectionArticulo.js";
import { SectionBienveniada } from "../components/home/SectionBienveniada.js";
import { SectionCarrusel } from "../components/home/SectionCarrusel.js";
export default function Inicio() {
  const $mian = document.createElement("main");


  const $section = document.createElement('section')
  $section.classList.add('head-main')
  const $articulo = SectionArticulo()
  const $carrusel = SectionCarrusel()
  const $bienveniada = SectionBienveniada()
  $section.append($bienveniada)
  $section.append($carrusel)
  $section.append($articulo)


  $mian.append($section)
  return $mian;

}




