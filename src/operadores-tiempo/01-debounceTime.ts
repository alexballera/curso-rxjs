import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

/** 
 * debounceTime: Emite un valor de la fuente Observable solo
 * después de que haya transcurrido un período de tiempo
 * particular sin otra emisión de fuente
 * debounceTime<T>(dueTime: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>
 * https://rxjs-dev.firebaseapp.com/api/operators/debounceTime
*/
const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
  debounceTime(1000)
)
// .subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$.pipe(
  debounceTime(1000),
  pluck('target', 'value'),
  distinctUntilChanged()
)
.subscribe(console.log)