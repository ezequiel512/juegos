import plataforma from "../../mock-plataforma";
import Plataforma from "./Plataforma";

const PlataformaForm = () => {

    function muestraPlataformas(plataforma, index) {
        return <Plataforma key={index} plataforma={plataforma}></Plataforma>;
      }

    return (
        <form>
                <select size={plataforma.length}>
                    {plataforma.map(muestraPlataformas)}
                </select>
        </form>

    )

}

export default PlataformaForm;