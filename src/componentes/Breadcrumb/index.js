import { useNavigate } from "react-router"
import { useLocation } from "react-router-dom"
import './index.css'

function Breadcrumb({actualPage}){

    const navigate = useNavigate()
    const location = useLocation()

    const currentLocation = location.pathname
    
    let shownCurrentLocation = currentLocation
    shownCurrentLocation = shownCurrentLocation.substring(1);

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
        <li onClick={()=>navigate("/")}><span className="has-space"> Home </span></li>
        <li><span className="has-space">{shownCurrentLocation}</span></li>
        </ul>
        </nav>
    )
}

export default Breadcrumb