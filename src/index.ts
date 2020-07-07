import {range, from, fromEvent} from 'rxjs'
import { tap, map } from 'rxjs/operators';
/** 
 * tap: retorna el mismo elemento con fines de depuración
 * o disparar eventos secundarios
 * https://rxjs-dev.firebaseapp.com/api/operators/tap
 * 
*/

const numeros$ = range(1,5)

numeros$.pipe(
  tap(x => {
    console.log('antes', x)
    return 100; // en el operador tap éste no se ejecuta
  }),
  map(val => val*10),
  tap({
    next: val => console.log('despues', val),
    complete: () => console.log('Completado!!!')
  })
)
.subscribe(val => console.log('subs', val))