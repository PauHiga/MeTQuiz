import { useState, useEffect} from "react"

function IndividualQuestionCard({preguntaActual, setCheckAnswer, checkAnswer, showSubmit, reset}) {  

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
        <div className="box m-6">
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
                        <label 
                        className={colorAnswer(item.is_correct)}
                        htmlFor={`${item.answer}`} key={`${item.id}`}>

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
                    )
                    
                })}
            </div>
        </div>
    )
}

export default IndividualQuestionCard