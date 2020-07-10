import { take } from 'rxjs/operators';
import { interval, concat, of } from 'rxjs';

/** 
 * function concat: Crea un Observable de salida que emite
 * secuencialmente todos los valores de un Observable dado
 * y luego pasa al siguiente.
 * concat<O extends ObservableInput<any>, R>(...observables: (SchedulerLike | O)[]): Observable<ObservedValueOf<O> | R>
 * https://rxjs-dev.firebaseapp.com/api/index/function/concat
*/

const interval$ = interval(1000)

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1,2,3,4],
  of(6)
).subscribe(console.log)
