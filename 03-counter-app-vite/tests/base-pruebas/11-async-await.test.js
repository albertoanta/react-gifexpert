import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 
    test('getimage debe devolver url de image',  async() => { 
         const resp = await getImagen();
         console.log( resp);
         expect( typeof(resp)).toBe('string');
    }) 
})