import imagenLoader from '../../img/ajax-loader.gif';
import "./AjaxLoader.css"
const AjaxLoader = () => {

    return (
        <div>
            <img src={imagenLoader} alt="ajax-loader"  className='AjaxLoader'/>
        </div>
    )
}

export default AjaxLoader;