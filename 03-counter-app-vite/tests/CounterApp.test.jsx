import {  fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => { 
    const valorInicial = 100;


    test('Debe hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={ valorInicial} />);
        expect(container).toMatchSnapshot();
     });

     test('Debe de mostrar el valorInicial inicial de 100  ', () => { 
        
        render( <CounterApp value={ valorInicial} />);
        //screen.debug();
        expect(screen.getAllByText(valorInicial)).toBeTruthy();
      });

      test('Debe incrementar con el boton +1', () => { 
         render( <CounterApp value={ valorInicial} />);
         fireEvent.click(screen.getByText('+1'))
         expect(screen.getByRole('heading', { level :4 }).innerHTML).toContain('101');
         // expect(screen.getByText('101')).toBeTruthy();
      })

      test('Debe decrementar con el boton -1', () => { 
         render( <CounterApp value={ valorInicial} />);
         fireEvent.click(screen.getByText('-1'))
         expect(screen.getByRole('heading', { level :4 }).innerHTML).toContain('99');
         // expect(screen.getByText('99')).toBeTruthy();
      })

      test('Debe funcionar el boton resetaar a 100', () => { 
         render( <CounterApp value={ valorInicial} />);
         fireEvent.click(screen.getByText('+1'))
         fireEvent.click(screen.getByText('+1'))
         fireEvent.click(screen.getByText('Reset'));         
         expect(screen.getByText('100')).toBeTruthy();
      })


      test('Debe funcionar el boton resetaar a 100 con otra implementacion', () => { 
         render( <CounterApp value={ valorInicial} />);
         fireEvent.click(screen.getByText('+1'))
         fireEvent.click(screen.getByText('+1'))
         fireEvent.click(screen.getByRole('button',{ name: 'btn-reset'}));
         expect(screen.getByText('100')).toBeTruthy();
      })





   
    
});