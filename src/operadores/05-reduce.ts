import {interval} from 'rxjs'
import { tap, map, reduce, take } from 'rxjs/operators';
/** 
 * reduce: funciona como reduce JS
 * aplica una función acumulativa
 * https://rxjs-dev.firebaseapp.com/api/operators/reduce
 * 
*/

const numbers = [1,2,3,4,5]

const totalReducer = (acumulador:number, valActual:number) => {
  return acumulador + valActual
}

const total = numbers.reduce(totalReducer, 0)
console.log('Total arr', total)

interval(500).pipe(
  take(3),
  tap(console.log),
  reduce(totalReducer)
)
.subscribe({
  next: val => console.log('next', val),
  complete: () => console.log('Complete!')
})