function ButtonCustom({text, onClick, classcustom})
{
    return <button className={classcustom} onClick={onClick}>{text}</button>
}

export default ButtonCustom