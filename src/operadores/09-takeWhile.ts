/** 
 * takeWhile: emite los valores que cumplen la condición
 * y luego se completa, se puede establecer inclusive para incluir
 * el valor que completa el observer
 * https://rxjs-dev.firebaseapp.com/api/operators/takeWhile
 * 
*/

import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  map(({x,y}) => ({x,y})),
  // takeWhile(({y}) => y <= 150)
  // se agrega true para el param "inclusive" e incluir al parámetro que hace complete
  takeWhile(({y}) => y <= 150, true)
)
.subscribe({
  next: event => console.log('next', event),
  complete: () => console.log('complete')
})