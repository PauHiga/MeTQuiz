import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ButtonCustom from '../../componentes/ButtonCustom'

const props ={
    text: "MetCamp Test",
    onClick: jest.fn(), 
    className: "",
}

describe("Tests en el componente Button", () =>{
    test("Debe de renderizar el componente Button", ()=> {
        render(<ButtonCustom {...props} />);
        const button = screen.getAllByText(/MetCamp Test/i);
        expect (button).toBeDefined();
    })

    test("Debe de ejecutar la función en onClick", ()=>{
        render(<ButtonCustom {...props} />);
        const button = screen.getByRole('button', {
            name: /metcamp test/i
          })
        
        userEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1)

    })
})