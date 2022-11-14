import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => { 
    test('getheroeById debe retornar heroe por ID', () => { 
        const id =1 ;
        const hero = getHeroeById( id );
        expect( hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
        console.log(hero);
    });

    test('getheroeById debe retornar undefined sin o existe el ID', () => { 
        const id =100 ;
        const hero = getHeroeById( id );
        expect( hero).toBe(undefined);
        expect( hero).toBeFalsy()
        console.log(hero);
    });

    test('Encontrar toEqual con 3 heroes de DC', () => { 
       const editorial = 'DC';
       const heroes = getHeroesByOwner(editorial);
       console.log( heroes )
       expect( heroes.length).toBe( 3 );
       expect( heroes ).toEqual( [
        { id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }
       ]);

       expect( heroes).toEqual(heroes.filter( (heroe) => heroe.owner === editorial ))
    });

    test('Encontrar toEqual con 2 heroes de Marvel', () => { 
        const editorial = 'Marvel';
        const heroes = getHeroesByOwner(editorial);
        console.log( heroes )
        expect( heroes.length).toBe( 2 );
        expect( heroes).toEqual(heroes.filter( (heroe) => heroe.owner === editorial ))
       
     });
});