import { useState } from "react";
import plataforma from "../../mock-plataforma.js";
const FiltroPlataformaForm=() =>{
    const estadoInicial = "";
    const [listaPlataforma, setListaPlataforma] = useState(plataforma);

    const [setNuevaPlataforma] = useState(estadoInicial)

    function manejarFormularioPlataforma(event){
        setNuevaPlataforma(event.target.value)
    }
    return(
        <div>
            <small>Plataforma</small>
        <form>
            <select size={2}>
                <option onChange={manejarFormularioPlataforma} value="0">{}</option>
                <option onChange={manejarFormularioPlataforma} value="1">{}</option>
            </select>
        </form>
        </div>
    )
}
export default FiltroPlataformaForm