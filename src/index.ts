import {range, from} from 'rxjs'
import { filter, pluck } from 'rxjs/operators';
/** 
 * filter: operador que filtra item que al evaluarlo cumple
 * con la condición
 * https://rxjs-dev.firebaseapp.com/api/operators/filter
 * parámetros: val, index
 * retorna: booleano, thisArg 
*/
// range(1,10).pipe(
//   // Muestra impares
//   filter(val => val % 2 === 1)
// ).subscribe(console.log)

range(10,20).pipe(
  // Muestra impares
  filter((val, i) => {
    console.log('index', i)
    return val % 2 === 1
  })
)//.subscribe(console.log)

interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Superman',
  },
  {
    tipo: 'villano',
    nombre: 'Dr Eggman',
  },
]

const src$ = from(personajes)

src$.pipe(
  filter(val => val.tipo === 'heroe'),
  pluck('nombre')
).subscribe(console.log)
