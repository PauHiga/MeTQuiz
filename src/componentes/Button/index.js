function Button({text, onClick})
{
    return <button  className="button m-2" onClick={onClick}>{text}</button>
}

export default Button