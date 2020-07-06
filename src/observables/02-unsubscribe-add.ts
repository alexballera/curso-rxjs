import { Observable, Observer } from 'rxjs';

/** 
 * Crear observer
*/


const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]:', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {
  let contador = 0
  const intervalo = setInterval(() => {
    contador ++;

    subscriber.next(contador);
    console.log(contador)
    
  }, 1000)

  setTimeout(() => {
    subscriber.complete()
  }, 3500);

  // Se ejecuta con el seTimeout unsubscribe y de esta manera 
  // se destruye el setInterval y de desusbscribe
  return () => {
    clearInterval(intervalo)
    console.log('Intérvalo destruído')
  }
})

const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

// Encadenamos los subscribe
subs1.add(subs2)
     .add(subs3)

// Se desubscribe al término de 3 seg o según la lógica de negocio
setTimeout(() => {
  subs1.unsubscribe()
  // subs2.unsubscribe()
  // subs3.unsubscribe()

  console.log('Completado el timeout')
}, 6000);