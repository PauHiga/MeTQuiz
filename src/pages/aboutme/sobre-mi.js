import './index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function SobreMi(){
    
    return (
            <div className="aboutmebackground grey">        
                <div className="text-container">
                    <h1 className='purple-grey'>Sobre Mi</h1>
                    <h2>Hola, Soy Paula!</h2>
                    <p>Estoy muy entusiasmada de empezar mi propia aventura en programación!</p>
                    <p>He estado estudiando <span className='purple-grey'>html, css</span> y <span className='purple-grey'>javascript</span>. Este es mi primer <span className='purple-grey'>proyecto en React</span> bajo la guía del equipo de Mujeres en Tecnología.<br/>
                    Espero poder aumentar mis conocimientos, aprender y crecer en este nuevo camino!</p>
                    <p>Tengo un <span className='purple-grey'>gatito adorable</span> que gusta de arañar el sofa cuando cree que no lo estoy viendo. Cuando no estoy trabajando o estudiando, me gusta  <span className='purple-grey'>hacer ilustraciones</span>. También me gusta la <span className='purple-grey'>jardinería</span>, espero que mi planta de zarzamora crezca bien este año!</p>
                    <div className='footer'>
                        <div className='links'>
                            <a href="https://www.linkedin.com/in/paula-gabriela-higa-214690249/"><span className='icon-social'><FaLinkedin/></span></a>
                            <a href="https://github.com/PauHiga/MeTQuiz/"><span className='icon-social'><FaGithub/></span></a>
                        </div>
                        <div className="cat"></div>
                    </div>
                </div>
            </div>
    )   
}

export default SobreMi