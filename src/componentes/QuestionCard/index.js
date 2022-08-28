function QuestionCard({preguntaActual, respuestasActuales, numeroPregunta})
{   
    console.log(respuestasActuales)

    const red = "blue"

    return (
        <div className="box m-6">
        <h3 className= "mb-5" style={{color: `${red}`}}> {numeroPregunta}- {preguntaActual}</h3>
        <div className="columns">
        {
            respuestasActuales.map((item) => {
                
                return (
                    <div className="column has-text-centered">
                        <input type="radio" id={`${item.answer}`} name={`${preguntaActual}`}></input>
                        <label className="ml-2" for={`${item.answer}`}>{item.answer}</label>
                        {/* <br /> */}
                    </div>
                    )
                })
        }
        </div>
        </div>
    )
}

export default QuestionCard