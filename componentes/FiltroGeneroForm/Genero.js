import { useContext } from "react";
import GeneroContext from "../../contextos/GeneroContext";

const Genero = (props) => {

    const genero = useContext(GeneroContext);

    return (

        <option onClick={genero} value={props.genero}>{props.genero}</option>

    )

}

export default Genero;