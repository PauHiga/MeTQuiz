import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import QuestionCard from "../../componentes/QuestionCard";

const props = {
    preguntaActual:{
    id: 1,
    question: "Cual es el segundo libro",
    answers:    [
            {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
            {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
            {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
            {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
        ],},
        checkAnswer: [],
        setCheckAnswer: jest.fn(),
        showSubmit: true,
        reset: true,
    }

describe("tests en componente QuestionCard", ()=>{

    test("Debe de renderizar el componente QuestionCard", ()=>{
        render(<QuestionCard {...props}/>);
        const question = screen.getByText(/Cual es el segundo libro/i);
        expect(question).toBeInTheDocument()
    })

    test("debe de ejecutar la función setCheckAnswer al interactuar con input radio", ()=>{
        render(<QuestionCard {...props}/>);
        const radio = screen.getByRole('radio', {name:'Harry Potter y la piedra filosofal'});
        userEvent.click(radio)
        expect(props.setCheckAnswer).toHaveBeenCalledTimes(1)
    })
})