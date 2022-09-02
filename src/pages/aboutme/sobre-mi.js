import './index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from '../../componentes/Button';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../componentes/Breadcrumb';

function SobreMi(){
    
    const navigate = useNavigate()

    return (
            <div className="section aboutmebackground grey is-flex is-flex-direction-column is-align-items-center">                      
                <div className="text-container">
                    <Breadcrumb/> 
                    <h1 className='purple-grey'>Sobre Mi</h1>
                    <h2>Hola, Soy Paula!</h2>
                    <p>Estoy muy entusiasmada de empezar mi propia aventura en programación!</p>
                    <p>He estado estudiando <span className='purple-grey'>html, css</span> y <span className='purple-grey'>javascript</span>. Este es mi primer <span className='purple-grey'>proyecto en React</span> bajo la guía del equipo de Mujeres en Tecnología.<br/>
                    Espero poder aumentar mis conocimientos, aprender y crecer en este nuevo camino!</p>
                    <p>Tengo un <span className='purple-grey'>gatito adorable</span> que gusta de arañar el sofa cuando cree que no lo estoy viendo. Cuando no estoy trabajando o estudiando, me gusta  <span className='purple-grey'>hacer ilustraciones</span>. También me gusta la <span className='purple-grey'>jardinería</span>, espero que mi planta de zarzamora crezca bien este año!</p>
                    <div className='columns'>
                        <div className='column has-text-centered'>
                                <div className='mt-5'>
                                    <a href="https://www.linkedin.com/in/paula-gabriela-higa-214690249/"><span className='icon-social'><FaLinkedin/></span></a>
                                    <a href="https://github.com/PauHiga/MeTQuiz/"><span className='icon-social'><FaGithub/></span></a>
                                    </div>
                        </div>
                        <div className="column cat"></div>
                    </div>               
                </div>
                <Button text="Ir al Quiz" onClick={()=> navigate ("/game") }/>     
            </div>
    )   
}

export default SobreMi