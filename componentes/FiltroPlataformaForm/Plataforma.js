import { useContext } from "react";
import PlataformaContext from "../../contextos/PlataformaContext";

const Plataforma = (props) => {

    const plataforma = useContext(PlataformaContext);

    return (

        <option onClick={plataforma} value={props.plataforma}>{props.plataforma}</option>

    )

}

export default Plataforma;