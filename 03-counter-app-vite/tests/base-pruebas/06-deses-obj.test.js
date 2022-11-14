

import { usContext } from "../../src/base-pruebas/06-deses-obj";

  test('getUsuarioActivo debe retornar un objeto', () => { 
    const nombre = 'Fernando';
    const anios = 12;
    
    const persona = {
      clave: nombre,
      edad: anios,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
    }
    
    const usuarioActivo = usContext(persona);
    expect(usuarioActivo).toEqual( 
      {
        nombreClave: 'Fernando',
        anios: 12,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
      } 
    );
  });


