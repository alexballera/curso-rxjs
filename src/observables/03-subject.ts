import { Observable, Observer, Subject } from 'rxjs';

/** 
 * Crear observer
*/


const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]:', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
  const intervalID= setInterval(
    () => subs.next(Math.random()), 1000
  )

  return () => {
    clearInterval(intervalID)
    console.log('Intervalo destruido')
  }
})

/**
 * Subject
 * 1.- Casteo múltiple: sirve para emitir el mismo dato a todos los subscribers
 * 2.- También es un observer
 * 3.- Next, error, complete
 */
const subject$ = new Subject()
const intervaloSubs = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd))

// const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(() => {
  // El subject se transforma en un Hot Observable al enviar un dato
  subject$.next(10);

  subject$.complete();

  intervaloSubs.unsubscribe();
}, 3500);