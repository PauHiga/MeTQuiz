import './button.css'

function Button({text, onClick}){
    return <button className="button is-light is-medium m-2" onClick={onClick}>{text}</button>
}

export default Button