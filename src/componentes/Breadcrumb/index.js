import { useNavigate } from "react-router"

function Breadcrumb({actualPage}){
    const navigate = useNavigate()

    let thisIsHome = ""
    let thisIsGame = ""

    if (actualPage === "/") {
        thisIsHome = "is-active"
    } else {
        thisIsGame = "is-active"
    }

    //console.log(actualPage)

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li className={thisIsHome} onClick={()=> navigate("/")}>Home</li>
            <li className={thisIsGame} onClick={()=> navigate("/game")}>Game</li>
        </ul>
        </nav>
    )
}

export default Breadcrumb