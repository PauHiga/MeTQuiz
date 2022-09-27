import './index.css'

function Button({text, onClick})
{
    return <button className="button m-2 inherit-font-family" onClick={onClick}>{text}</button>
}

export default Button