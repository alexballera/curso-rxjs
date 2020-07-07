import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

/** 
 * distinct: emite valores los cuales previamente no han
 * sido emitidos
 * https://rxjs-dev.firebaseapp.com/api/operators/distinct
 * 
*/


const numeros$ = of(1,1,1,1,1,3,3,3,3,3,2,2,4,4,4,4,4,5,4,3,2,1)

numeros$.pipe(
  distinct() // ===
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
    nombre: 'Megaman'
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
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },{
    nombre: 'Megaman'
  },
]
// Con objetos
from(personajes).pipe(
  distinct(p => p.nombre)
)
.subscribe(console.log)