import { useState} from "react"
import Button from "../Button"

function IndividualQuestionCard({wizardQuestion}) 
{
    const [numeroPreguntaIndividual, setNumeroPreguntaIndividual] = useState(0)
    const [finalCard, setFinalCard] = useState(false)
    const [listOfIndividualAnswers, setListOfIndividualAnswers] = useState([])
    const [optionChecked, setOptionChecked] = useState(0)
    const [isCardAnswered, setIsCardAnswered] = useState(false)
    const countScore = listOfIndividualAnswers.filter((item)=>item.answerTF === true)

    console.log(countScore);

    function next(){
        if (numeroPreguntaIndividual + 1 < wizardQuestion.length)
            {
            setNumeroPreguntaIndividual(numeroPreguntaIndividual + 1)
            setIsCardAnswered(false)
            setOptionChecked(0)
            }
        else
            setFinalCard(true)
    }

    function individualAnswer(questionId, trueOrFalse){
        const noRepeat = listOfIndividualAnswers.filter((item) => item.chosenQuestionId !== questionId)
        setListOfIndividualAnswers([...noRepeat,
        {
            chosenQuestionId: questionId,
            answerTF: trueOrFalse,
        }
        ])
        setIsCardAnswered(true)
    }

    function resetGame(){
        setNumeroPreguntaIndividual(0)
        setFinalCard(false)
        setListOfIndividualAnswers([])
        setOptionChecked(0)
        setIsCardAnswered(false)
    }

    return (
        <div className="box m-6">
            {
                !finalCard &&(
                    <>
                        <h3 className= "mb-5" >{wizardQuestion[numeroPreguntaIndividual].id} - {wizardQuestion[numeroPreguntaIndividual].question}</h3>

                    {wizardQuestion[numeroPreguntaIndividual].answers.map((item)=>{
                        let radioTrue 
                        if (item.id === optionChecked){radioTrue=true}
                        else {radioTrue=false}

                        return(
                            <div key={item.answer} onChange={()=>individualAnswer(wizardQuestion[numeroPreguntaIndividual].id, item.is_correct)}>

                                <input 
                                id={`${item.answer}`} 
                                name={`${wizardQuestion.question}`} 
                                className="m-1" 
                                type="radio" 
                                onChange={()=>setOptionChecked(item.id)}
                                checked={radioTrue}></input>

                                <label htmlFor={`${item.answer}`} className="pr-6 py-1" >{item.answer}</label>

                            </div>
                        )
                    })}
                    <div className="is-flex is-justify-content-center">
                        <Button text="Confirmar" onClick={()=> next()} disabled={!isCardAnswered}/>
                    </div>
                    </>  
                )
            }

            {
                finalCard && 
                    <div className="is-flex is-flex-direction-column is-align-items-center">
                        <h3>Tuviste {countScore.length} / {wizardQuestion.length} respuestas correctas!</h3>
                        <Button text="Jugar de nuevo" onClick={()=>resetGame()}/>
                    </div>
            } 

        </div>
    )
}

export default IndividualQuestionCard