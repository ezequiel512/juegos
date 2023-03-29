import genero from "../../mock-genero";
import Genero from "./Genero";

const GeneroForm = () => {

    function muestraGeneros(genero, index) {
        return <Genero key={index} genero={genero}></Genero>;
      }

return (
    <form>
            <select size={genero.length}>
                {genero.map(muestraGeneros)}
            </select>
    </form>

)



}

export default GeneroForm;