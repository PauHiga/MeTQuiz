import Button from "../../componentes/Button"
import { useNavigate} from 'react-router-dom';
import './index.css'

function Home(){
    const navigate = useNavigate()
    return (
        <section className="hero section is-fullheight background">
            <div className="hero-body is-justify-content-center is-flex-direction-column">
                <Button text="MetCamp Quiz" onClick={()=> navigate("/game")}/>
                <Button text="Sobre Mí" onClick={()=> navigate("/sobre-mi")}/>
            </div>
        </section>
        )
}

export default Home