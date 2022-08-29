import './'
import { useEffect, useState } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'

function Game(){

    const [loading, setLoading] = useState(true)
    const [wizardQuestion, setWizardQuestion] = useState([])

    useEffect(()=> {    
        fetch("https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter")
        .then(response => response.json())
        .then(data => {
        setWizardQuestion(data)
        })
        .catch(error => console.error(error))
        .finally(setLoading(false))
    }, []);

    return (
        <section className="section">
            <Breadcrumb/>
            <h1 className="has-text-centered title">Harry Potter Quiz Game</h1>
            
            <div>
            {   
                loading && <div className="has-text-centered" ><span>Loading . . . </span></div>
            }

            {   
                !loading && (
                    <form> 
                        {
                            wizardQuestion.map((item) => 
                            {return <QuestionCard key= {item.id} numeroPregunta = {item.id} preguntaActual = {item.question} respuestasActuales = {item.answers}/>}
                            ) 
                        }
                    </form>
                )
            }
            </div>

        </section>
    )
}

export default Game