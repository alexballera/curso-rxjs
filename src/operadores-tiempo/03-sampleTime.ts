import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';
/** 
 * sampleTime: Emite el último valor emitido o el más recientemente
 * desde la fuente Observable dentro de intervalos de tiempo periódicos.
 * 
 * sampleTime<T>(period: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>
 * 
 * https://rxjs-dev.firebaseapp.com/api/operators/sampleTime
*/

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  sampleTime(2000), // es más eficiente en este momento que después del map
  map(({x, y}) => ({x, y})),
)
.subscribe(console.log)