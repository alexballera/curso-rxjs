import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
/** 
 * exhaustMap: Proyecta cada valor fuente en un Observable
 * que se fusiona en el Observable de salida solo si el
 * Observable proyectado anterior se ha completado.
 * Mantiene una sola emisión activa, para poder emitir el siguiente
 * debe esperar terminar el anterior
 * https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap
 * https://reqres.in/
*/

// Helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login', userPass)
    .pipe(
      pluck('response', 'token'),
      catchError(err => of('Error!!!'))
    )

// Formulario
const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

// Configuraciones
inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form)

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value
    })),
    // mergeMap(peticionHttpLogin)
    // switchMap(peticionHttpLogin)
    // Preferible usar exhausMap para este caso porque solo ejecuta el último submit
    // en caso de que el usuario haga click muchas veces en el botón submit
    exhaustMap(peticionHttpLogin)
  )

submitForm$.subscribe(token => {
  console.log(token)
})