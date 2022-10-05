import './index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from '../../componentes/Button';
import { useNavigate } from 'react-router';
import Breadcrumb from '../../componentes/Breadcrumb';

function Info(){
    
    const navigate = useNavigate()

    return (
        <div className="section has-background-primary">                      
            <div className="box">
                <Breadcrumb/> 
                <h1 className="title">Paula Gabriela Higa</h1>
                <h2 className="subtitle">Frontend developer</h2>

                <div className="is-flex is-flex-direction-column is-align-items-center">
                            <div>
                                <a href="https://www.linkedin.com/in/paula-gabriela-higa-214690249/"><span className='icon-social'><FaLinkedin/></span></a>
                                <a href="https://github.com/PauHiga/MeTQuiz/"><span className='icon-social'><FaGithub/></span></a>

                            </div>
                </div>               
                <div className="message is-primary">
                    <div className="message-header">
                        <p className="subtitle">Sobre este proyecto:</p>
                    </div>
                    <div className="message-body">
                        <div className="columns">
                            <div className="column p-5">
                                <p>Proyecto de Quiz Game en React con llamada a API via fetch, navegación con React Router, aplicación de hooks de react para realizar la lógica del juego: mostrar preguntas, registrar las respuestas, registrar preguntas verdaderas o falsas, cantidad de preguntas faltantes, lógica de renderizado condicional, reset del juego y referencia a la primer respuesta incorrecta. Renderizado condicional para mostrar u ocultar componentes hasta completar la llamada a API, o para cambiar el contenido según las respuestas del jugador. <br/> Aplicación de testing básico: test unitarios de componentes.
                                </p>
                            </div>
                            <div className="column p-5 content">
                                <ul>
                                    <li>Aplicación de hooks de React: useState, useEffect y useRef</li>
                                    <li>Navegación con React Router</li>
                                    <li>Renderizado condicional</li>
                                    <li>Test unitarios de componentes</li>
                                    <li>CSS framework utilizado: <a href="https://bulma.io/">Bulma</a></li>
                                </ul>
                            </div>
                        </div>


                    <p className="block">Proyecto realizado en el MeT Camp 2022 de React dictado por <a href="https://mujeresentecnologia.org/"> Mujeres en Tecnología</a></p>
                    </div>
                </div>
                <div className="is-flex is-justify-content-center">
                    <Button text="Ir al proyecto Quiz Game" onClick={()=>navigate("/")}/>
                </div>
                    
            </div>
        </div>
    )   
}

export default Info