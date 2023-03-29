import "./Filtro.css";
import OrdenacionForm from "../OrdenacionForm/OrdenacionForm"
const Filtro = (props) =>{
    return(
        <div className="filtro">
            <h2>Ordenacion</h2>
            <small>Titulo</small>
            <OrdenacionForm></OrdenacionForm>
        </div>
    )
}
export default Filtro;