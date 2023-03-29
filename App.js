import './App.css';
import { useState } from 'react';
import ListaJuegos from './componentes/ListaJuegos/ListaJuegos';
import Titulo from './componentes/Titulo/Titulo'
import OrdenacionForm from "./componentes/OrdenacionForm/OrdenacionForm"
import FiltroGeneroForm from "./componentes/FiltroGeneroForm/FiltroGeneroForm"
import FiltroPlataformaForm from "./componentes/FiltroPlataformaForm/FiltroPlataformaForm"
import TituloContext from './contextos/TituloContext';
import PlataformaContext from './contextos/PlataformaContext';
import GeneroContext from './contextos/GeneroContext';

function App() {

const [ordenacion, setOrdenacion] = useState("A...Z");
const [genero, setGenero] = useState("Todos");
const [plataforma, setPlataforma] = useState("Todos");

function manejarOrdenacion(event) {
  actualizarListaOrdenacion(event.target.value);
}

function actualizarListaOrdenacion(value) {
  setOrdenacion(value);
}

function usoFiltroGenero(event) {
  actualizarListaGenero(event.target.value);
}

function actualizarListaGenero(value) {
  setGenero(value);
}

function usoFiltroPlataforma(event) {
  actualizarListaPlataforma(event.target.value);
}

function actualizarListaPlataforma(value) {
  setPlataforma(value);
}


  return (
    <div>
      <header>
          <Titulo></Titulo>
      </header>
      <body>
        <div className='menu'>
        <TituloContext.Provider value={manejarOrdenacion}>
          <OrdenacionForm></OrdenacionForm>
          </TituloContext.Provider>
          <GeneroContext.Provider value={usoFiltroGenero}>
          <FiltroGeneroForm></FiltroGeneroForm>
          </GeneroContext.Provider>
          <PlataformaContext.Provider value={usoFiltroPlataforma}>
          <FiltroPlataformaForm></FiltroPlataformaForm>
          </PlataformaContext.Provider>
        </div>
        <ListaJuegos actualizarOrdenacion={ordenacion} actualizarGenero={genero} actualizarPlataforma={plataforma}></ListaJuegos>  
      </body>
    </div>
    
  );
}

export default App;
