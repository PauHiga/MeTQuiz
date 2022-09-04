import bien from '../../assets/snape-approves.jfif'
import medio from '../../assets/medio.png'
import mal from '../../assets/dafuq.jfif'
import { useState } from 'react'
import { useEffect } from 'react'

function FinalImage({score}) 
{
    const [imageResult, setImageResult] = useState()

    function chooseImage (score) {   
        if (score<5) setImageResult(mal)
        else if (score >=8) setImageResult(bien)
        else setImageResult(medio)
    }

    useEffect (()=>{
    chooseImage(score)
    }, [score])

    return (
    <img src={imageResult} alt="imagen resultado"/>
    )
}

export default FinalImage