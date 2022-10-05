import { useState, useEffect } from "react"


function useBackground(housesStyle) {

    const [backgroundColor, setBackgroundColor] = useState("section is-flex is-justify-content-center")

    useEffect(()=>{
        if (housesStyle === "sly"){setBackgroundColor("section is-flex is-justify-content-center sly")}
    else if (housesStyle === "gry"){setBackgroundColor("section is-flex is-justify-content-center gry")}
    else if (housesStyle === "rav"){setBackgroundColor("section is-flex is-justify-content-center rav")}
    else if (housesStyle === "huf"){setBackgroundColor("section is-flex is-justify-content-center huf")}
    }, [housesStyle]);

    return (
        {backgroundColor}
    )
}

export default useBackground