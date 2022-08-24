import Button from "../../componentes/Button"
import { useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }

    return (

        <div className="center-on-screen">
        <Button onClick={() => onClickButton('/game')} text="MetCamp Quiz"/>
        <Button onClick={() => onClickButton('/about-me')} text="About Me"/>
        </div>
        )


}

export default Home