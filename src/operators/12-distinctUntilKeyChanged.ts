import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

/** 
 * distinctUntilKeyChanged: emite valores siempre y cuando la emisión sea
 * igual a la propiedad anterior
 * https://rxjs-dev.firebaseapp.com/api/operators/distinctUntilKeyChanged
 * 
*/

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman'
  },
  {
    nombre: 'Megaman'
  },{
    nombre: 'X'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Zero'
  },{
    nombre: 'Zero'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Batman'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Supermán'
  },{
    nombre: 'X'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },
]
// Con objetos
from(personajes).pipe(
  distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)