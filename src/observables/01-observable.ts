import { Observable, Observer } from 'rxjs';

/** 
 * Crear un observable
 * const obs$ = Observable.create()
*/

const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo!');

  // Forzar un error
  // const a = undefined
  // a.nombre = 'Fernando'

  // A partir de complete() no se emite más el obs$
  subs.complete();

  subs.next('Hola');
  subs.next('Mundo 2!');

});

const observer: Observer<any> = {
  next: value => console.log('siguiente (next):', value),
  error: error => console.warn('error (obs):', error),
  complete: () => console.info('Completado')
}

/** 
 * En ES6
 * obs$.subscribe(resp => console.log(resp)); === obs$.subscribe(console.log);
 * Para que un observador se ejecute debe terner un subscribe
 * 3 posibles argumentos que se le envían a un observable
 * 1ro: el valor (next)
 * 2do: error
 * 3ro: complete
*/

// Opción 1
// obs$.subscribe(
//   valor => console.log('next:', valor),
//   error => console.warn('error:', error),
//   () => console.info('Completado')
// );

// Opción 2
obs$.subscribe(observer);
