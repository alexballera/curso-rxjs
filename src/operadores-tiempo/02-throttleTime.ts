import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

/** 
 * throttleTime: Emite un valor del origen Observable, luego
 * ignora los valores de origen posteriores durante milisegundos
 * de duración, luego repite este proceso.
 * 
 * throttleTime<T>(duration: number, scheduler: SchedulerLike = async, config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T>
 * 
 * https://rxjs-dev.firebaseapp.com/api/operators/throttleTime
*/
const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  throttleTime(1000)
)
// .subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true, // primer elemento
    trailing: true, // último elemento
  }),
  pluck('target', 'value'),
  distinctUntilChanged()
)
.subscribe(console.log)