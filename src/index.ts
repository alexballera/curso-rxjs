import {range, fromEvent} from 'rxjs'
import { map} from 'rxjs/operators';
/** 
 * map: extraer, transformar información
 * https://rxjs-dev.firebaseapp.com/api/operators/map
 * from: crea secuencia obs, objeto iterable
 * type <recibe, emite>
*/

// range(1,5).pipe(
//   map<number,string>(val => (val*10).toString())
// )
// .subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
  map(event => event.code)
)

keyupCode$.subscribe(code => console.log('map', code))