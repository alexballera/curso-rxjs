import { take, tap } from 'rxjs/operators';
import { of } from 'rxjs';
/** 
 * take: toma el primer valor o los que se indique en el parámetro
 * y luego se completa
 * aplica una función acumulativa
 * https://rxjs-dev.firebaseapp.com/api/operators/take
 * 
*/

const numeros$ = of(1,2,3,4,5)

numeros$.pipe(
  tap(t => console.log(t)),
  take(3)
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('Complete')
})