import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

/** 
 * startWith: Devuelve un Observable que emite los elementos
 * que especifique como argumentos antes de comenzar a emitir
 * elementos emitidos por el Observable de origen.
 * startWith<T, D>(...array: (SchedulerLike | T)[]): OperatorFunction<T, T | D>
 * https://rxjs-dev.firebaseapp.com/api/operators/startWith
 * 
*/

// Referencias
const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Cargando...'
const body = document.querySelector('body')

// Streams
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
  startWith(true)
)
.subscribe(resp => {

  if (resp === true) {
    body.append(loadingDiv)
  } else {
    document.querySelector('.loading').remove()
  }
  console.log(resp)
})