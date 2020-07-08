import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
/** 
 * sample: Emite el valor emitido más recientemente desde
 * la fuente Observable siempre que otro Observable,
 * el notificador, emite.
 * 
 * sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>
 * 
 * https://rxjs-dev.firebaseapp.com/api/operators/sample
*/

const interval$ = interval(500)
const click$ = fromEvent(document, 'click')

interval$.pipe(
  sample(click$)
).subscribe(console.log)