import "./Juego.css";
const Juego = (props) =>{
    return(
        <li>
        <figure>
        <img src={props.juego.thumbnail}></img>
        <figcaption>
        <h2 className="titulo-juego">{props.juego.title}</h2>
        <p className="ju-plataforma"><strong>Plataforma. </strong>{props.juego.platform}</p>
        <p className="ju-plataforma"><strong>Lanzamiento. </strong>{props.juego.release_date}</p>
        <p className="ju-plataforma"><strong>Genero. </strong> {props.juego.genre}</p>
        <p className="ju-url"><a href={props.juego.game_url}> Descargatelo</a></p></figcaption>
        </figure>
        </li>
    )
}
export default Juego;