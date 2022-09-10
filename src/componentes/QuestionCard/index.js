import { useState, useEffect} from "react"

function QuestionCard({preguntaActual, respuestasActuales, numeroPregunta,  setCheckAnswer, checkAnswer, showSubmit, reset})
{   

    function chosenAnswer( questionId, answerTrueFalse, answerId) {
        const noDuplicatedAnswers = checkAnswer.filter((item) => item.id !== questionId) 
        setCheckAnswer([...noDuplicatedAnswers,
        {
            id: questionId,
            answerTF: answerTrueFalse,
            // answerTd: answerId
        }
        ])
    }

    const [optionChecked, setOptionChecked] = useState(0)

    useEffect(()=> {    
        setOptionChecked(0)
    }, [reset]);

    return (
        <div className="box m-6">
            <h3 className= "mb-5" > {numeroPregunta}- {preguntaActual}</h3>
            <div className="columns">

            {
                respuestasActuales.map((item) => {

                    function colorAnswer(truefalse){
                        let valorClase = "column has-text-centered ml-2"
                        if (!showSubmit){
                            if (truefalse === true && radioTrue) { valorClase = "column has-text-centered ml-2 has-text-primary"}
                            else if (truefalse === false && radioTrue) { valorClase = "column has-text-centered ml-2 has-text-danger"}
                            else {valorClase = "column has-text-centered ml-2"}
                        }
                        return valorClase
                    }

                    let radioTrue 
                    if (item.id === optionChecked
                         ){radioTrue=true}else {radioTrue=false}

                    return (
                            <label className={colorAnswer(item.is_correct)}
                            htmlFor={`${item.answer}`} key={`${item.id}`}>

                                <input 
                                className="m-1"
                                onChange={()=> {chosenAnswer(numeroPregunta, item.is_correct, item.id);setOptionChecked(item.id)}} 
                                type="radio"
                                checked={radioTrue}
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