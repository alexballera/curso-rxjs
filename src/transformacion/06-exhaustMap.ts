import { interval, fromEvent } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

/** 
 * exhaustMap: Proyecta cada valor fuente en un Observable
 * que se fusiona en el Observable de salida solo si el
 * Observable proyectado anterior se ha completado.
 * Mantiene una sola emisión activa, para poder emitir el siguiente
 * debe esperar terminar el anterior
 * https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap
*/

const interval$ = interval(1000).pipe(take(3))
const click$ = fromEvent(document, 'click')

click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log)