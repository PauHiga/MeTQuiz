import Button from "../../componentes/Button"
import { useNavigate} from 'react-router-dom';
import './index.css'
import Breadcrumb from "../../componentes/Breadcrumb";

function Home(){
    const navigate = useNavigate()

    let userLang = navigator.language || navigator.userLanguage; 
    
    let idioma = ""
    let idiomatext = ""

    if (userLang.startsWith("es-")){
        idioma = "/sobre-mi";
        idiomatext = "Sobre Mí";
    } else {
        idioma = "/about-me"
        idiomatext = "About Me";
    }

    // userLang.startsWith("es-") ? idioma = "/sobre-mi" : idioma = "/about-me"
    // userLang.startsWith("es-") ? idiomatext = "Sobre Mí" : idiomatext = "About Me"

    return (

        <section className="hero section is-fullheight">
            <div className="hero-body is-justify-content-center is-flex-direction-column">
                <Button text="MetCamp Quiz" onClick={()=> navigate("/game")}/>
                <Button text={idiomatext} onClick={()=> navigate(idioma)}/>
            </div>
        </section>
        )


}

export default Home