import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

/** 
 * ajax getJSON
 * getJSON obtiene la información de la respuesta
 * ajax muestra más información de la petición
*/

const url = 'https://httpbin.org/delay/1'

const manejaError = (resp: AjaxError) => {
  console.warn('error', resp.message)
  return of({
    ok: false,
    usuarios: []
  })
}

// const obs1$ = ajax.getJSON(url).pipe(
//   catchError(manejaError)
// )
// const obs2$ = ajax(url).pipe(
//   catchError(manejaError)
// )

const obs1$ = ajax.getJSON(url)
const obs2$ = ajax(url)

obs2$.pipe(
  catchError(manejaError)
)

// obs1$.subscribe(data => console.log('getJSON', data))
obs2$.subscribe({
  next: val => console.log('next:', val),
  error: err => console.warn('error', err.message),
  complete: () => console.log('complete')
})