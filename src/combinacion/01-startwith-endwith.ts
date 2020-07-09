import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

/** 
 * startWith: Devuelve un Observable que emite los elementos
 * que especifique como argumentos antes de comenzar a emitir
 * elementos emitidos por el Observable de origen.
 * startWith<T, D>(...array: (SchedulerLike | T)[]): OperatorFunction<T, T | D>
 * https://rxjs-dev.firebaseapp.com/api/operators/startWith
 * 
 * endWith: Devuelve un Observable que emite los elementos que
 * especifique como argumentos después de que termine de emitir
 * elementos emitidos por el Observable de origen.
 * endWith<T>(...array: (SchedulerLike | T)[]): MonoTypeOperatorFunction<T>
 * https://rxjs-dev.firebaseapp.com/api/operators/endWith
*/

const numeros$ = of(1,2,3)
.pipe(startWith('Inicio con startWidth'))
.pipe(endWith('Finaliza con endWidth'))

numeros$
// .pipe(startWith('Inicio con startWidth'))
// .pipe(endWith('Finaliza con endWidth'))
.subscribe(console.log)
