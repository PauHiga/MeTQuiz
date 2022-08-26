import './index.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function AboutMe(){
    
    return (
        <div className="center-on-screen">
            <div className="aboutmebackground grey">      
                <div className="text-container">                
                    <h1 className='purple-grey'>About Me</h1>
                    <h2>Hi, I am Paula!</h2>
                    <p>I'm very excited to start my own programming journey!</p>
                    <p>I've been studying <span className='purple-grey'>html, css</span> and <span className='purple-grey'>javascript</span>. This is my first <span className='purple-grey'>React project</span>, with the guidance of the MeT camp group.<br/>
                    Looking forward to <span className='purple-grey'>increase my skills, learn and grow</span> in this new path!</p>
                    <p>I have an adorable <span className='purple-grey'>tabby cat</span> who loves to scratch the couch when is not being seen. When I am not working or studying, I like to <span className='purple-grey'>draw</span> small illustrations. I also like gardening -hope my <span className='purple-grey'>blackberries</span> grow nicely this year!-.</p>
                    
                    <div className='links'>
                        <a href="https://www.linkedin.com/in/paula-gabriela-higa-214690249/"><span className='icon-social'><FaLinkedin/></span></a>
                        <a href="https://github.com/PauHiga/MeTQuiz/"><span className='icon-social'><FaGithub/></span></a>
                    </div>
                </div>

                <div className='footer'>

                    <div className="cat"></div>
                </div>
            </div>
        </div>
    )   
}

export default AboutMe