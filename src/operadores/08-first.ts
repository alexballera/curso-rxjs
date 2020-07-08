import { take, first, tap, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
/** 
 * first: emite el primer valor o el primero que cumpla
 * la condición y luego se completa
 * https://rxjs-dev.firebaseapp.com/api/operators/first
 * 
*/
const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  // take(1)
  // first(), Primer evento
  // first<MouseEvent>(event => event.clientY >= 150) // Primer evento que cumple la condición
  // Destructuración
  tap<MouseEvent>(() => console.log('tap')),
  // map(event => ({
  //   clientY: event.clientY,
  //   clientX: event.clientX
  // }))
  map(({clientX, clientY}) => ({ clientY,clientX })),
  first(event => event.clientY >= 150) // Primer evento que cumple la condición
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
})
