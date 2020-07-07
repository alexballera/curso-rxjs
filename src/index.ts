import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';
/** 
 * takeUntil: emite los valores que cumplen con una notificación
 *            de otro observable y luego se completa
 * skip: se salta los valores hasta el parámetro pasado
 * https://rxjs-dev.firebaseapp.com/api/operators/takeUntil
 * https://rxjs-dev.firebaseapp.com/api/operators/skip
 * 
*/
