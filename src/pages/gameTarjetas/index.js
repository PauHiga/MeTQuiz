import { useState } from 'react'
import IndividualQuestionCard from '../../componentes/IndividualQuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import ButtonCustom from '../../componentes/ButtonCustom'
import useFetch from '../../hooks/useFetch/inedx'

function GameIndCards(){

    const [backgroundColor, setBackgroundColor] = useState("section is-flex is-justify-content-center")
    const sly = ()=>{setBackgroundColor("section is-flex is-justify-content-center sly")}
    const gry = ()=>{setBackgroundColor("section is-flex is-justify-content-center gry")}
    const huf = ()=>{setBackgroundColor("section is-flex is-justify-content-center huf")}
    const rav = ()=>{setBackgroundColor("section is-flex is-justify-content-center rav")}
    const urlAPI = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter"
    const {loading, items :wizardQuestion} = useFetch(urlAPI)

    return (
        <section className={`${backgroundColor}`}>
            <div className='custom-size box'>
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
                            <ButtonCustom className="button custom-button" text="Slytherin Style" onClick={sly}/>
                            <ButtonCustom className="button custom-button" text="Gryffindor Style" onClick={gry}/>
                            <ButtonCustom className="button custom-button" text="Hufflepuff  Style" onClick={huf}/>
                            <ButtonCustom className="button custom-button" text="Ravenclaw Style" onClick={rav}/>
                            </div> 

                            <section>
                            {
                                <IndividualQuestionCard 
                                key={wizardQuestion.id}
                                wizardQuestion={wizardQuestion}
                                />
                            }
                            </section>
                        </>
                    )}    
                </div>
            </div>
        </section>
    )
}

export default GameIndCards