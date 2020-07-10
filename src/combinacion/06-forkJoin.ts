import { take, delay } from 'rxjs/operators';
import { of, interval, forkJoin } from 'rxjs';

/** 
 * forkJoin: Acepta una matriz de ObservableInput o un objeto de
 * diccionario de ObservableInput y devuelve un Observable que emite
 * una matriz de valores exactamente en el mismo orden que la matriz
 * aprobada, o un diccionario de valores en la misma forma que el
 * diccionario pasado. Devuelve el último valor de cada observable.
 * Los ObservableInput deben ser finitos y forkJoin emite los valores
 * una vez que todos los observables se han completado
 * 
 * forkJoin(...sources: any[]): Observable<any>
 * 
 * https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin
*/

const numeros$ = of(1,2,3,4)
const interval$ = interval(1000).pipe(take(3))
const letras$ = of('a', 'b', 'c').pipe(delay(3500))

// forkJoin(
//   numeros$,
//   interval$,
//   letras$
// ).subscribe(console.log)

// forkJoin(
//   numeros$,
//   interval$,
//   letras$
// ).subscribe(resp => {
//   console.log('numero', resp[0])
//   console.log('intérvalo', resp[1])
//   console.log('letras', resp[2])
// })

forkJoin({
  numeros$,
  interval$,
  letras$
}).subscribe(resp => {
  console.log(resp)
})

// Con nombres personalizados de las propiedades con ES6
forkJoin({
  num: numeros$,
  int: interval$,
  let: letras$
}).subscribe(resp => {
  console.log(resp)
})
