import './index.css'

function Button({text, onClick, disabled})
{
    return <button className="button m-2 inherit-font-family" onClick={onClick} disabled={disabled}>{text}</button>
}

export default Button