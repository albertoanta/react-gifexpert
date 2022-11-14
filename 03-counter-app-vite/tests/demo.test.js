describe('Pruebas en  <DemoComponent />', () => { 

    test('Esta prueba no debe de fallar', () => {
        // 1.- inicializacion
        const message1 = 'Hola mundo';
       
        // 2. Estimulo
        const message2 = message1.trim();
       
        // 3.- Asecciones u observar el comportamiento
        expect( message1 ).toBe( message2 );
       
       })

})

