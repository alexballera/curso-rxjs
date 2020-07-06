import { Observable, Observer } from 'rxjs';

/** 
 * Crear observer
*/


const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]:', error),
  complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subs => {
  let contador = 0
  const intervalo = setInterval(() => {
    contador ++;

    subs.next(contador);
    
  }, 1000)

  // Se ejecuta con el seTimeout unsubscribe y de esta manera 
  // se destruye el setInterval y de desusbscribe
  return () => {
    clearInterval(intervalo)
    console.log('Intérvalo destruído')
  }
})

const subs1 = intervalo$.subscribe(num => console.log('Num:', num))

// Se desubscribe al término de 3 seg o según la lógica de negocio
setTimeout(() => {
  subs1.unsubscribe()
}, 3000);