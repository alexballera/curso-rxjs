import { of, range, asyncScheduler } from 'rxjs';
/** 
 * range
 * https://rxjs-dev.firebaseapp.com/api/index/function/range
 * Crea un observable que crea una secuencia de números con
 * base a un rango específico
 * Argumentos: 1ro indica el inicio y 2do indica la cantidad
 * asyncScheduler la convertimos en asíncrona
*/

// const src$ = of<number>(1,2,3,4,5)

// console.log('Inicio')
// src$.subscribe(console.log)
// console.log('Fin')

const src$ = range(1,5, asyncScheduler)

console.log('Inicio')
src$.subscribe(console.log)
console.log('Fin')

