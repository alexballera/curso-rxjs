import { fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

/** 
 * function combineLatest: Combina múltiples observables
 * para crear un observable cuyos valores se calculan a
 * partir de los últimos valores de cada uno de sus
 * observables de entrada.
 * combineLatest<O extends ObservableInput<any>, R>(...observables: (SchedulerLike | O | ((...values: ObservedValueOf<O>[]) => R))[]): Observable<R>
 * https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest
*/

// const keyup$ = fromEvent(document, 'keyup')
// const click$ = fromEvent(document, 'click')

// combineLatest(
//   keyup$.pipe(pluck('type')),
//   click$.pipe(pluck('type'))
// ).subscribe(console.log)

const input1$ = document.createElement('input')
const input2$ = document.createElement('input')

input1$.placeholder = 'email@email.com'

input2$.placeholder = '********'
input2$.type = 'password'

document.querySelector('body').append(input1$, input2$)

// Helper

const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    pluck<KeyboardEvent, string>('target', 'value'))

combineLatest(
  getInputStream(input1$),
  getInputStream(input2$),
).subscribe(console.log)