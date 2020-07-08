import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/** 
 * distinctUntilChanged: emite valores siempre y cuando la emisión anterior
 * no sea la misma
 * https://rxjs-dev.firebaseapp.com/api/operators/distinctUntilChanged
 * 
*/


const numeros$ = of(1,1,4,1,1,3,3,3,3,3,2,2,4,4,4,4,4,5,4,3,2,1)

numeros$.pipe(
  distinctUntilChanged() // ===
)
.subscribe(console.log)

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
  distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
)
.subscribe(console.log)