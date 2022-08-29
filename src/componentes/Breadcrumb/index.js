
function Breadcrumb(){

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li><a href="./">Home</a></li>
            <li className="is-active"><a href="./game" aria-current="page">Game</a></li>
        </ul>
        </nav>
    )
}

export default Breadcrumb