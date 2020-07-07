import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';
/** 
 * takeUntil: emite los valores que cumplen con una notificación
 *            de otro observable y luego se completa
 * skip: se salta los valores hasta el parámetro pasado
 * https://rxjs-dev.firebaseapp.com/api/operators/takeUntil
 * https://rxjs-dev.firebaseapp.com/api/operators/skip
 * 
*/

const boton = document.createElement('button')
boton.innerHTML = 'Detener Timer'

document.querySelector('body').append(boton)

const counter$ = interval(1000)
const clickBtn$ = fromEvent(boton, 'click').pipe(
  tap(() => console.log('Tap antes del skip')),
  // salta el cumplimiento en n veces
  skip(1),
  tap(() => console.log('Tap después del skip')),
)

counter$.pipe(
  takeUntil(clickBtn$),
)
.subscribe({
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
})
