/** 
 * fromEvent
 * https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent
 * Permite crear observables con base en un event target
 * Eventos del DOM
 */

import { fromEvent } from "rxjs";

const obs1$ = fromEvent<MouseEvent>(document, 'click')
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
  next: val => console.log('next:', val)
}

obs1$.subscribe(({x,y}) => {
  console.log(x,y)
})
obs2$.subscribe(evento => {
  console.log(evento.key)
})