import { useState, useEffect} from "react"

function QuestionCard({preguntaActual, setCheckAnswer, checkAnswer, showSubmit, reset, primeraIDFalsa, primeraIncorrectaRef}) {  

    function chosenAnswer( questionId, answerTrueFalse) {
        const noDuplicatedAnswers = checkAnswer.filter((item) => item.id !== questionId) 
        setCheckAnswer([...noDuplicatedAnswers,
        {
            id: questionId,
            answerTF: answerTrueFalse,
        }
        ])
    }

    const [optionChecked, setOptionChecked] = useState(0)

    useEffect(()=> {    
        setOptionChecked(0)
    }, [reset]);

    return (
        <div className="question-card box m-6" ref={primeraIDFalsa === preguntaActual.id ? primeraIncorrectaRef : null}>
            <h3 className= "mb-5" > {preguntaActual.id}- {preguntaActual.question}</h3>
            <div className="columns">
                {preguntaActual.answers.map((item) => {

                    function colorAnswer(truefalse){
                        let valorClase = "column has-text-centered ml-2"
                        if (!showSubmit){
                            if (truefalse === true && radioTrue) { valorClase = "column has-text-centered ml-2 has-text-primary"}
                            else if (truefalse === false && radioTrue) { valorClase = "column has-text-centered ml-2 has-text-danger"}
                            else {valorClase = "column has-text-centered ml-2"}
                        }
                        return valorClase
                    }

                    let disabled = false
                    if (!showSubmit){disabled=true}
                    else {disabled=false}

                    let radioTrue 
                    if (item.id === optionChecked){radioTrue=true}
                    else {radioTrue=false}

                    return (
                        <div className={colorAnswer(item.is_correct)} key={`${item.id}`}>
                            <label 
                            htmlFor={`${item.answer}`} 
                            >
                            <input 
                            className="m-1"
                            onChange={()=> {chosenAnswer(preguntaActual.id, item.is_correct, item.id);setOptionChecked(item.id)}} 
                            type="radio"
                            checked={radioTrue}
                            disabled={disabled}
                            id={`${item.answer}`}
                            name={`${preguntaActual.question}`}></input>
                            {item.answer}
                            </label>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default QuestionCard