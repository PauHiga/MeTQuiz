import { useState, useEffect, useRef } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import Button from '../../componentes/Button'
import ButtonCustom from '../../componentes/ButtonCustom'
import FinalImage from '../../componentes/final-image'
import useFetch from '../../hooks/useFetch/inedx'
import useBackground from '../../hooks/useBackground'

function Game(){

    
    const urlAPI = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"
    const {loading, items :wizardQuestion} = useFetch(urlAPI)
    const [checkAnswer, setCheckAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [missingAnswers, setMissingAnswers] = useState(false)
    const [showSubmit, setshowSubmit] = useState(true)
    const rightAnswers = checkAnswer.filter((item)=>item.answerTF === true)
    const [reset, setReset] = useState(false)
    const PlayAgain = () =>{setReset(true)}
    const [housesStyle, setHousesStyle] = useState("")
    const {backgroundColor} = useBackground(housesStyle)
    const primeraIncorrectaRef = useRef(null);
    const soloIdsFalsas = checkAnswer.filter((item) => item.answerTF === false).map(({id}) => id)
    const [primeraIDFalsa, setPrimeraIDFalsa] = useState(0)
    useEffect(()=> {    
        if (soloIdsFalsas.length >0){
        setPrimeraIDFalsa(Math.min(...soloIdsFalsas))
        }
    }, [soloIdsFalsas]);

    useEffect(()=>{
        setScore(0)
        setCheckAnswer([])
        setMissingAnswers(false)
        setshowSubmit(true)
        setReset(false)
    }, [reset])

    function submitButtonPressed(){
        if (checkAnswer.length === wizardQuestion.length) { 
        setMissingAnswers(false)
        setScore(rightAnswers.length)
        setshowSubmit(false)
        } else {
        setMissingAnswers(true)       
        }
    }

    function handleScroll() {
        primeraIncorrectaRef.current.scrollIntoView({behavior: "smooth"})    
      }

    return (
        <section className={`${backgroundColor}`}>
            <div className='max-width box'>
                <Breadcrumb/>
                <h1 className="has-text-centered title-quiz">Harry Potter Quiz Game</h1>
                <div>
                    {   
                    loading && <div className="has-text-centered"><span>Loading . . . </span></div>
                    }

                    {   
                    !loading && (
                        <>
                            <div className='houses-buttons-box'>
                            <ButtonCustom className="button custom-button" text="Slytherin Style" onClick={()=>setHousesStyle("sly")}/>
                            <ButtonCustom className="button custom-button" text="Gryffindor Style" onClick={()=>setHousesStyle("gry")}/>
                            <ButtonCustom className="button custom-button" text="Hufflepuff  Style" onClick={()=>setHousesStyle("huf")}/>
                            <ButtonCustom className="button custom-button" text="Ravenclaw Style" onClick={()=>setHousesStyle("rav")}/>
                            </div> 

                            <form>
                            {
                                wizardQuestion.map((item) => {return <QuestionCard 
                                    setCheckAnswer={setCheckAnswer}
                                    checkAnswer={checkAnswer} 
                                    key= {item.id} 
                                    preguntaActual = {item}
                                    showSubmit = {showSubmit}
                                    reset = {reset}
                                    primeraIDFalsa = {primeraIDFalsa}
                                    primeraIncorrectaRef ={primeraIncorrectaRef}
                                    />
                                }) 
                            }
                            </form>
                            <div className='is-flex is-flex-direction-column is-align-items-center'>                                
                                {missingAnswers && showSubmit && <p>Te falta responder {wizardQuestion.length - checkAnswer.length} preguntas!</p>}
                                {showSubmit && <Button text="Validar" onClick={()=>submitButtonPressed()}/>}
                                {   
                                    !showSubmit && 
                                    <div className='is-flex is-flex-direction-column is-align-items-center'>
                                    <p className='level-item'>Tu puntaje fue {score}!</p>
                                    <FinalImage score={score}/>
                                    <Button onClick={()=>{PlayAgain(); handleScroll()}} text="Jugar de nuevo"/>
                                    
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