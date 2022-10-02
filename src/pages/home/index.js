import ButtonCustom from "../../componentes/ButtonCustom"
import { useNavigate} from 'react-router-dom';
import './index.css'

function Home(){
    const navigate = useNavigate()
    return (
        <section className="hero section is-fullheight background">
            <div className="hero-body is-justify-content-center">
                <ButtonCustom className="is-danger button button-spacing" text="Entrar al Juego Tarjetas" onClick={()=> navigate("/gameCards")}/>
                <ButtonCustom className="is-danger button button-spacing" text="Entrar al Juego Quiz Game" onClick={()=> navigate("/gameQuiz")}/>
            </div>
            <div className="is-flex is-flex-direction-column is-align-items-center">
                <p className="has-text-centered p-background">Proyecto Quiz Game de MeT Camp 2022 realizado por Paula Higa</p>
                <ButtonCustom className="button button-bottom" text="Sobre este proyecto" onClick={()=> navigate("/info")}/>
            </div>
        </section>
        )
}

export default Home