import { render, screen } from "@testing-library/react"
import IndividualQuestionCard from "../../componentes/IndividualQuestionCard";

const props = {
    wizardQuestion:[
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
        {
        id: 1,
        question: "Cual es el segundo libro",
        answers:    [
                {id: 1, answer: 'Harry Potter y el príncipe mestizo', is_correct: false},
                {id: 2, answer: 'Harry Potter y el cáliz de fuego', is_correct: false},
                {id: 3, answer: 'Harry Potter y la cámara secreta', is_correct: true},
                {id: 4, answer: 'Harry Potter y la piedra filosofal', is_correct: false},
            ],
        },
    ]

}

describe("tests en componente IndividualQuestionCard", ()=>{

    test("Debe de renderizar el componente IndividualQuestionCard", ()=>{
        render(<IndividualQuestionCard {...props}/>);
        const question = screen.getByText(/Cual es el segundo libro/i);
        expect(question).toBeInTheDocument()
    })
})