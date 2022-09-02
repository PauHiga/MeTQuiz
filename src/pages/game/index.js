import './'
import { useEffect, useState } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import './index.css'
import Button from '../../componentes/Button'

function Game(){

    const [backgroundColor, setBackgroundColor] = useState("section is-flex is-justify-content-center")

    const sly = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center sly")
        console.log(backgroundColor)
    }
    const gry = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center gry")
        console.log(backgroundColor)
    }
    const huf = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center huf")
        console.log(backgroundColor)
    }
    const rav = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center rav")
        console.log(backgroundColor)
    }


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
        <section className={`${backgroundColor}`}>
            <div className='max-width'>
                <Breadcrumb/>
                <h1 className="has-text-centered title-quiz">Harry Potter Quiz Game</h1>
                <div className='is-flex is-justify-content-center'>
                    <Button text="Slytherin Style" onClick={sly}/>
                    <Button text="Gryffindor Style" onClick={gry}/>
                    <Button text="Hufflepuff  Style" onClick={huf}/>
                    <Button text="Ravenclaw Style" onClick={rav}/>
                </div>
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
            </div>
        </section>
    )
}

export default Game