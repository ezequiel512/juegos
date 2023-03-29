import { useState } from "react";
const OrdenacionForm=() =>{
    const estadoInicial = "";
    const [SetNuevaBusqueda] = useState(estadoInicial)
    function manejarFormulario(event){
        SetNuevaBusqueda(event.target.value)
    }
    return(
        <div>
        <h2>Ordenacion</h2>
        <small>Titulo</small>
        <form>
            <select>
                <option onChange={manejarFormulario} value="0">A...Z</option>
                <option onChange={manejarFormulario} value="1">Z...A</option>
            </select>
        </form>
        </div>
    )
}
export default OrdenacionForm