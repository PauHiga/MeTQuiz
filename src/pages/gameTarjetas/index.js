import { useState } from 'react'
import IndividualQuestionCard from '../../componentes/IndividualQuestionCard'
import Breadcrumb from '../../componentes/Breadcrumb'
import ButtonCustom from '../../componentes/ButtonCustom'
import useFetch from '../../hooks/useFetch/inedx'
import useBackground from '../../hooks/useBackground'

function GameIndCards(){
    const [housesStyle, setHousesStyle] = useState("")
    const {backgroundColor} = useBackground(housesStyle)

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
                            <ButtonCustom className="button custom-button" text="Slytherin Style" onClick={()=>setHousesStyle("sly")}/>
                            <ButtonCustom className="button custom-button" text="Gryffindor Style" onClick={()=>setHousesStyle("gry")}/>
                            <ButtonCustom className="button custom-button" text="Hufflepuff  Style" onClick={()=>setHousesStyle("huf")}/>
                            <ButtonCustom className="button custom-button" text="Ravenclaw Style" onClick={()=>setHousesStyle("rav")}/>
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