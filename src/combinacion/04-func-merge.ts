import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/** 
 * function merge: Crea un Observable de salida que
 * emite simultáneamente todos los valores de cada
 * Observable de entrada dado. Se completa el subscribe
 * cuando todos los observables se completan
 * merge<T, R>(...observables: any[]): Observable<R>
 * https://rxjs-dev.firebaseapp.com/api/index/function/merge
*/

const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log)