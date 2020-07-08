import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';
/** 
 * auditTime: Ignora los valores de origen durante milisegundos
 * de duración, luego emite el valor más reciente del Observable
 * de origen, luego repite este proceso.
 * 
 * auditTime<T>(duration: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>
 * 
 * https://rxjs-dev.firebaseapp.com/api/operators/auditTime
*/

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  map(({x}) => x),
  tap(val => console.log('tap', val)),
  auditTime(2000)
).subscribe(console.log)