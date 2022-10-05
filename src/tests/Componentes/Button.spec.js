import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from '../../componentes/Button'

const props ={
    text: "MetCamp Test",
    onClick: jest.fn(), 
    disabled: false,
}

describe("Tests en el componente Button", () =>{
    test("Debe de renderizar el componente Button", ()=> {
        render(<Button {...props} />);
        const button = screen.getAllByText(/MetCamp Test/i);
        expect (button).toBeDefined();
    })

    test("Debe de ejecutar la función en onClick", ()=>{
        render(<Button {...props} />);
        const button = screen.getByRole('button', {
            name: /metcamp test/i
          })
        
        userEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1)

    })
})