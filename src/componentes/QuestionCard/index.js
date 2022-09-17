import { useState, useEffect, forwardRef } from "react"

const QuestionCard = forwardRef(({preguntaActual, respuestasActuales, numeroPregunta,  setCheckAnswer, checkAnswer, showSubmit, reset, minWrongAnswer}, ref) => {
    // const QuestionCard = (preguntaActual, respuestasActuales, numeroPregunta,  setCheckAnswer, checkAnswer, showSubmit, reset, minWrongAnswer, childInputRef) => {

        // <input ref={childInputRef} />
    // useImperativeHandle(ref, () => ({
    //     showAlert() {
    //       alert("Hello from Child Component")
    //     },
    //   }))

    console.log('card received minWrongAnswer =' + minWrongAnswer);

     function chosenAnswer( questionId, answerTrueFalse) {
        const noDuplicatedAnswers = checkAnswer.filter((item) => item.id !== questionId) 
        setCheckAnswer([...noDuplicatedAnswers,
        {
            id: questionId,
            answerTF: answerTrueFalse,
        }
        ])

        // console.log(checkAnswer);

        // if (
        //     checkAnswer.id>numeroPregunta 
        //     && 
        //     answerTrueFalse === false
        //     ) {setFirstWrongAnswer(numeroPregunta)}

        // const firstWrongAnswer = checkAnswer.filter((item) => item.id<= questionId && item.answerTF===false) 
        // console.log(firstWrongAnswer);

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

                    function isFirstWrong(){
                        console.log('isFirstWrong received minWrongAnswer =' + minWrongAnswer);
                        console.log('isFirstWrong received numeroPregunta =' + numeroPregunta);
                        if(minWrongAnswer===numeroPregunta) { console.log("hit" + minWrongAnswer + numeroPregunta);}
                    }
                         

                    return (
                            <label className={colorAnswer(item.is_correct)}
                            htmlFor={`${item.answer}`} key={`${item.id}`}>

                                <input 
                                className="m-1"
                                ref={inputRef}
                                onChange={()=> {
                                    chosenAnswer(numeroPregunta, item.is_correct, item.id);
                                    setOptionChecked(item.id)
                                    isFirstWrong()
                                }} 
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
            
            {/* <input ref={inputRef} type="text" /> */}
        </div>
    )
});

export default QuestionCard