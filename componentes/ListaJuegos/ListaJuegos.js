import { useEffect, useState } from 'react';
import Juego from "../Juego/Juego";
import getAllJuegos from "../../servicios/juegos/getAllJuegos"
import AjaxLoader from '../Ajax-Loader/AjaxLoader';
import "./ListaJuegos.css";
const ListaJuegos = (props) =>{
    
    const [lista, setLista] = useState([]);

    const [buscando, setBuscando] = useState(false);

    function obtenerJuegos(){
        setBuscando(true);

      getAllJuegos().then(
                juegos => {
                    setLista(juegos);
                setBuscando(false);
            })


    }
    useEffect(obtenerJuegos,[]);

    function ordenarJuegos(a, b) {
        if (props.actualizarOrdenacion === "A...Z") {
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          }
            return 0;
        } else if (props.actualizarOrdenacion === "Z...A") {
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return 1;
          } else if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return -1;
          }
            return 0;
        }
      }

      function filtrarPlataforma(juego) {
        return props.actualizarPlataforma === "Todos" ? true
        : juego.platform === props.actualizarPlataforma;
      }
  
      function filtrarGenero(juego) {
        return props.actualizarGenero === "Todos" ? true
        : juego.genre === props.actualizarGenero;
      }

    function mostrarJuegos(juego){
        return <Juego  key={juego.id} juego={juego}></Juego>;
    }
    
    return(
        <div>
        {buscando ? <AjaxLoader className="AjaxLoader"></AjaxLoader> 
        : <ul className='ListaJuegos'>
            {lista.filter(filtrarPlataforma)
              .filter(filtrarGenero)
              .sort(ordenarJuegos)
              .map(mostrarJuegos)}
        </ul>
        }
    </div>
    )
}
export default ListaJuegos;
