import { interval, fromEvent } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
/** 
 * switchMap vs mergeMap
 * El switch mantiene la última emisión activa mientras que 
 * el merge mantiene todas activas de manera simultánea
 * https://rxjs-dev.firebaseapp.com/api/operators/switchMap
 * https://rxjs-dev.firebaseapp.com/api/operators/mergeMap
*/

const click$ = fromEvent(document, 'click')
const intervalo$ = interval(1000)

click$.pipe(
  // mergeMap(() => intervalo$)
  switchMap(() => intervalo$)
).subscribe(console.log)