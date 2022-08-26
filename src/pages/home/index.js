import Button from "../../componentes/Button"
import { useNavigate} from 'react-router-dom';

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

    console.log(userLang);

    return (

        <div className="center-on-screen">
            <Button text="MetCamp Quiz" onClick={()=> navigate("/game")}/>
            <Button text={idiomatext} onClick={()=> navigate(idioma)}/>


        {/* <Button onClick={() => onClickButton('/game')} text="MetCamp Quiz"/>
        <Button onClick={() => onClickButton('/about-me')} text="About Me"/> */}
        </div>
        )


}

export default Home