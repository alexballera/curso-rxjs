/** 
 * of
 * https://rxjs-dev.firebaseapp.com/api/index/function/of
 * Permite crear observables a partir de un listado de elementos
 * emite los valores uno a uno de manera síncrona y luego se completa
 */

import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6,7,8)
const obs$ = of<number>(...[1,2,3,4,5,6,7,8],9,10)
// const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true))

console.log('Inicio del obs$')

obs$.subscribe(
  next => console.log('next:', next),
  null,
  () => console.log('Secuencia terminada!')
)

console.log('Fin del obs$')


