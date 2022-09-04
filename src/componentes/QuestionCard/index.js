import { useState} from "react"

function QuestionCard({preguntaActual, respuestasActuales, numeroPregunta,  setCheckAnswer, checkAnswer, resetGame, showSubmit})
{   
    const [radioChecked, setRadioChecked] = useState()
                        
    function chosenAnswer( questionId, answerTrueFalse) {
        const noDuplicatedAnswers = checkAnswer.filter((item) => item.id !== questionId) 
        setCheckAnswer([...noDuplicatedAnswers,
        {
            id: questionId,
            answerTF: answerTrueFalse
        }
        ])
    }

    function colorAnswer(truefalse){
        let valorClase = "column has-text-centered ml-2"
        if (!showSubmit){
            if (truefalse === true) { valorClase = "column has-text-centered ml-2 has-text-primary"}
            else { valorClase = "column has-text-centered ml-2 has-text-danger"}
        }
        return valorClase
    }

    // console.log(resetGame)
    // if (resetGame) {
    //     console.log(resetGame)
    //     setResetGame(false)
    //     console.log(resetGame)
    // }
    // console.log(resetGame)

    return (
        <div className="box m-6">
            <h3 className= "mb-5" > {numeroPregunta}- {preguntaActual}</h3>
            <div className="columns">
            {
                respuestasActuales.map((item) => {

                    return (
                            <label className={colorAnswer(item.is_correct)}
                            htmlFor={`${item.answer}`} key={`${item.id}`}>

                                <input 
                                className="m-1"
                                onChange={()=> {chosenAnswer(numeroPregunta, item.is_correct); setRadioChecked(item.answer)}} 
                                type="radio" 
                                checked={radioChecked === item.answer}
                                id={`${item.answer}`}
                                name={`${preguntaActual}`
                                }></input>
                            {item.answer}</label>
                        )
                    })
            }
            </div>
        </div>
    )
}

export default QuestionCard