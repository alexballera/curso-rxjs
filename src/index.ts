import { fromEvent } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
/** 
 * mergeAll: Convierte un Observable de orden superior en un
 * Observable de primer orden que entrega simultáneamente todos
 * los valores que se emiten en los Observables internos.
 * mergeAll<T>(concurrent: number = Number.POSITIVE_INFINITY): OperatorFunction<ObservableInput<T>, T>
 * https://rxjs-dev.firebaseapp.com/api/operators/mergeAll
*/

// Referencias
const body = document .querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput, orderList)

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
  debounceTime(500),
  pluck('target', 'value'),
  map(texto => ajax.getJSON(
    `https://api.github.com/search/users?q=${texto}`
  )),
  mergeAll(),
  pluck('items')
).subscribe(resp => {
  console.log(resp)
})