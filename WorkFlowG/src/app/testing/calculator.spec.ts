import { Calculator } from './calculator'
import { templateJitUrl } from '@angular/compiler';

describe('TestSuite para probar la calculadora', ()=> {
    let calculator: Calculator;
    beforeEach(() => {
        //Arrange
        calculator = new Calculator();
    })
    
    it('Pruebas de multiply debe retornar 9', () => {
        
        //Act
        let resultado = calculator.multiply(3,3);
        //Assert
        expect(resultado).toBe(9);
    });

    it('Pruebas de multiply debe retornar 4', () => {
       
        //Act
        let resultado = calculator.multiply(1,4);
        //Assert
        expect(resultado).toBe(4);
    });

    it('Pruebas de divide debe retornar 3', () => {
        
        //Act
        let resultado = calculator.divide(9,3);
        //Assert
        expect(resultado).toBe(3);
    });

    it('Pruebas de divide debe retornar NULL', () => {
       
        //Act
        let resultado = calculator.divide(9,0);
        //Assert
        expect(resultado).toBeNull;
    });
});