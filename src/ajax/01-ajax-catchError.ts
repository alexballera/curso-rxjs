import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
/** 
 * ajax
 * AjaxError
 * catchError: sirve para atrapar error en http y en el observable
 * puede retornar un mensaje de error u otro observable
 * https://rxjs-dev.firebaseapp.com/api/ajax/ajax
 * https://rxjs-dev.firebaseapp.com/api/ajax/AjaxError
 * https://rxjs-dev.firebaseapp.com/api/operators/catchError
*/

// Manejo con Fetch
const url = 'https://api.github.com/users?per_page=5'

// Para que se dispare el error hay que manehar el catch en las promesas
const mensajeErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response
}

const fetchPromesa = fetch(url)

fetchPromesa
  .then(mensajeErrores)
  .then(resp => resp.json())
  .then(data => console.log('fetch:', data))
  .catch(err => console.warn('Error', err))

// Manejo con ajax de RxJs
const atrapaError = (err: AjaxError) => {
  console.warn('error', err.message)
  return of([])
}
ajax(url).pipe(
  // map(resp => resp.response)
  pluck('response'),
  catchError(atrapaError)
).subscribe(resp => console.log('ajax rxjs:', resp))