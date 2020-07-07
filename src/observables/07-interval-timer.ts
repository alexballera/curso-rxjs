import { interval, timer } from 'rxjs';
/** 
 * interval & timer
 * https://rxjs-dev.firebaseapp.com/api/index/function/interval
 * https://rxjs-dev.firebaseapp.com/api/index/function/timer
 * Interval crea un observable que emite un intervalo de tiempo. Es asíncrono
 * Timer crea un obs que comienza a emitir valores en un tiempo determinado.
 * Es asíncrono y se puede programar alguna notificación en algún momento del tiempo
*/

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('complete')
}

const hoyEn5 = new Date()
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(1000)
// const timer$ = timer(1000, 1000)
const timer$ = timer(hoyEn5)

console.log('Inicio')
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('Fin')
