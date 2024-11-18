import { Inicio } from "./paginas/inicio.js";
import { Header } from "./components/Header.js";
export function App() {
  const $app = document.querySelector('#root')
  $app.append(Header())
  $app.append(Inicio())
}