import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

/** 
 * concatMap: Proyecta cada valor fuente en un Observable que
 * se fusiona en el Observable de salida, de forma serializada
 * esperando que cada uno se complete antes de fusionar el
 * siguiente. Se van concatenando los observables y se van activanto
 * a medida que se vayan terminando o completado el anterior.
 * https://rxjs-dev.firebaseapp.com/api/operators/concatMap
*/

const interval$ = interval(1000).pipe(take(3))
const click$ = fromEvent(document, 'click')

click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log)