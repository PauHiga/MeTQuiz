import './'
import { useEffect, useState } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import './index.css'
import Button from '../../componentes/Button'

function Game(){

    const [backgroundColor, setBackgroundColor] = useState("")

    const sly = ()=>{
        setBackgroundColor("linear-gradient(45deg, rgba(170,170,170,1) 25%, rgba(42,98,61,1) 50%)")
        console.log(backgroundColor)
    }
    const gryf = ()=>{
        setBackgroundColor("linear-gradient(45deg, rgba(238,186,48,1) 25%, rgba(174,0,1,1) 50%)")
        console.log(backgroundColor)
    }
    const huf = ()=>{
        setBackgroundColor("linear-gradient(45deg, rgba(0,0,0,1) 25%, rgba(255,237,134,1) 50%)")
        console.log(backgroundColor)
    }
    const rav = ()=>{
        setBackgroundColor("linear-gradient(45deg, rgba(148,107,45,1) 25%, rgba(34,47,91,1) 50%)")
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
        <section className="section is-flex is-justify-content-center" className={{background: `${backgroundColor}`}} >
            <div className='max-width'>
                <Breadcrumb/>
                <h1 className="has-text-centered title">Harry Potter Quiz Game</h1>
                <div className='is-flex is-justify-content-center'>
                    <Button text="Slytherin Style" onClick={sly}/>
                    <Button text="Gryffindor Style" onClick={gryf}/>
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