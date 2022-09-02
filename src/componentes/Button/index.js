import './button.css'

function Button({text, onClick}){
    return <button className="button is-medium m-2" onClick={onClick}>{text}</button>
}

export default Button