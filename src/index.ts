import { Observable, Observer } from 'rxjs';

/** 
 * Crear un observable
 * const obs$ = Observable.create()
*/


const observer: Observer<any> = {
  next: value => console.log('siguiente (next):', value),
  error: error => console.warn('error (obs):', error),
  complete: () => console.info('Completado')
}
