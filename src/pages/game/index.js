import './'
import { useState } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import './index.css'
import Button from '../../componentes/Button'
import FinalImage from '../../componentes/final-image'
import useFetch from '../../hooks/useFetch/inedx'

function Game(){

    const [backgroundColor, setBackgroundColor] = useState("section is-flex is-justify-content-center")

    const sly = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center sly")
    }
    const gry = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center gry")
    }
    const huf = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center huf")
    }
    const rav = ()=>{
        setBackgroundColor("section is-flex is-justify-content-center rav")
    }

    const urlAPI = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"

    const {loading, data :wizardQuestion} = useFetch(urlAPI)

    const [checkAnswer, setCheckAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [missingAnswers, setMissingAnswers] = useState(false)
    const [showSubmit, setshowSubmit] = useState(true)

    const rightAnswers = checkAnswer.filter((item)=>item.answerTF === true)

    const [reset, setReset] = useState(false)

    const PlayAgain = () =>{
            setReset(true)
            setScore(0)
            setCheckAnswer([])
            setMissingAnswers(false)
            setshowSubmit(true)
    }

    // const playAgain = () =>{
    // setReset(current => !current)
    // console.log("quiz " + reset);
    // }

    function submitButtonPressed(){
        if (checkAnswer.length === wizardQuestion.length) { 
        setMissingAnswers(false)
        setScore(rightAnswers.length)
        setshowSubmit(false)
        } else {
        setMissingAnswers(true)       
    }
    }

    return (
        <section className={`${backgroundColor}`}>
            <div className='max-width'>
                <Breadcrumb/>
                <h1 className="has-text-centered title-quiz">Harry Potter Quiz Game</h1>
                <div>
                    {   
                    loading && <div className="has-text-centered" ><span>Loading . . . </span></div>
                    }

                    {   
                    !loading && (
                        <>
                            <div className='is-flex is-justify-content-center'>
                            <Button text="Slytherin Style" onClick={sly}/>
                            <Button text="Gryffindor Style" onClick={gry}/>
                            <Button text="Hufflepuff  Style" onClick={huf}/>
                            <Button text="Ravenclaw Style" onClick={rav}/>
                            </div> 

                                <div>
                                {
                                    wizardQuestion.map((item) => {return <QuestionCard 
                                        setCheckAnswer={setCheckAnswer}
                                        checkAnswer={checkAnswer} 
                                        key= {item.id} 
                                        numeroPregunta = {item.id} 
                                        preguntaActual = {item.question} 
                                        respuestasActuales = {item.answers}
                                        showSubmit = {showSubmit}
                                        reset = {reset}
                                        setReset = {setReset}
                                        PlayAgain = {PlayAgain}
                                        />
                                    }) 
                                }
                            </div>


                            <div className='is-flex is-flex-direction-column is-align-items-center'>
                                
                                { missingAnswers && showSubmit && <p>Te falta responder {wizardQuestion.length - checkAnswer.length} preguntas!</p>
                                }
                                { showSubmit && <Button text="Validar" onClick={()=>submitButtonPressed()}/> 
                                }
                                { !showSubmit && 
                                <div className='is-flex is-flex-direction-column is-align-items-center'>
                                    <p className='level-item'>Obtuviste {score} puntos!</p>
                                    <FinalImage score={score}/>
                                    <Button onClick={()=>PlayAgain()} text="Jugar de nuevo" 
                                    /> 
                                </div>
                                }

                                
                            </div>    
                        </>
                    )}    

                </div>

            </div>
        </section>
    )
}

export default Game