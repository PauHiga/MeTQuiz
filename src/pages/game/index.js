import './'
import { useState, useEffect, useRef } from 'react'
import QuestionCard from '../../componentes/QuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import './index.css'
import Button from '../../componentes/Button'
import FinalImage from '../../componentes/final-image'
import useFetch from '../../hooks/useFetch/inedx'

function Game(){

    const [backgroundColor, setBackgroundColor] = useState("section is-flex is-justify-content-center")
    const sly = ()=>{setBackgroundColor("section is-flex is-justify-content-center sly")}
    const gry = ()=>{setBackgroundColor("section is-flex is-justify-content-center gry")}
    const huf = ()=>{setBackgroundColor("section is-flex is-justify-content-center huf")}
    const rav = ()=>{setBackgroundColor("section is-flex is-justify-content-center rav")}

    const urlAPI = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"
    const {loading, items :wizardQuestion} = useFetch(urlAPI)

    const [checkAnswer, setCheckAnswer] = useState([])
    const [score, setScore] = useState(0)
    const [missingAnswers, setMissingAnswers] = useState(false)
    const [showSubmit, setshowSubmit] = useState(true)
    const rightAnswers = checkAnswer.filter((item)=>item.answerTF === true)

    // const soloFalsas = checkAnswer.filter((item) => item.answerTF === false)
    // const idDeFalsas = soloFalsas.map((item) => item.id)
    // const idDeFalsas = soloFalsas.map(( { id } ) => id)

    const soloIdsFalsas = checkAnswer.filter((item) => item.answerTF === false).map(({id}) => id)

    


    const idDeFalsasOrdenadas = soloIdsFalsas.sort();
    const [primeraIncorrecta, setPrimeraIncorrecta] = useState(0);
    useEffect(()=>{if (idDeFalsasOrdenadas.length!==0) {setPrimeraIncorrecta(idDeFalsasOrdenadas[0])}},[idDeFalsasOrdenadas])

    // console.log("primera incorrecta index " + primeraIncorrecta);

    const primeraIncorrectaRef = useRef(null);

    // function handleClick() {
    //     primeraIncorrectaRef.current.focus();
    //     console.log(primeraIncorrectaRef.current);
    //   }
    
    // function handleScroll() {
    //     primeraIncorrectaRef.current.scrollIntoView({behavior: "smooth"})    
    //   }

    //     console.log(primeraIncorrectaRef.current);
    //     console.log(primeraIncorrectaRef?.offsetTop);
    // window.scrollTo({
    //   top: primeraIncorrectaRef?.offsetTop,
    //   left: 0,
    //   behavior: "smooth",
    // });


    // const handleScroll = (primeraIncorrectaRef) => {
    //     alert("handleScroll")
    //     console.log(primeraIncorrectaRef.current);
    //     window.scrollTo({
    //       top: primeraIncorrectaRef.offsetTop,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   };

console.log(primeraIncorrectaRef)

    const [reset, setReset] = useState(false)

    const PlayAgain = () =>{
        primeraIncorrectaRef.current.scrollIntoView({behavior: "smooth"}) 
        setReset(true)
    }

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
                            <Button text="Slytherin Style" onClick={sly}/>
                            <Button text="Gryffindor Style" onClick={gry}/>
                            <Button text="Hufflepuff  Style" onClick={huf}/>
                            <Button text="Ravenclaw Style" onClick={rav}/>
                            </div> 

                            <form>
                            {
                                wizardQuestion.map((item) => {
                                    
                                    // var amarillo = "amarillo"
                                    // var conditionalRef = {
                                    //     buttonRef: buttonRef,
                                    //     amarillo: amarillo,
                                    //   };
                                      
                                    //   if (item.id === 100) {
                                    //     conditionalRef.disabled = false;
                                    //   } else {conditionalRef.disabled = true}
                               
                                    //   console.log(conditionalRef);

                                    return <QuestionCard 
                                    setCheckAnswer={setCheckAnswer}
                                    checkAnswer={checkAnswer} 
                                    key= {item.id} 
                                    preguntaActual = {item}
                                    showSubmit = {showSubmit}
                                    reset = {reset}
                                    primeraIncorrecta={primeraIncorrecta}
                                    primeraIncorrectaRef ={primeraIncorrectaRef}
                                    // {...conditionalRef}
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
                                    <Button onClick={
                                        ()=>{PlayAgain();
                                            // handleScroll();
                                    }} text="Jugar de nuevo" 
                                    /> 
                                    </div>
                                }
                            </div>    
                            {/* <Button onClick={handleScroll} text="refTest"/> */}
                        </>
                    )}    
                </div>
            </div>
        </section>
    )
}

export default Game