import {range, fromEvent} from 'rxjs'
import { map, pluck} from 'rxjs/operators';
/** 
 * map: extraer, transformar información
 * pluck: extrae un valor del objeto
 * https://rxjs-dev.firebaseapp.com/api/operators/map
 * https://rxjs-dev.firebaseapp.com/api/operators/pluck
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

// const keyupPluck$ = keyup$.pipe(
//   pluck('key')
// )

const keyupPluck$ = keyup$.pipe(
  pluck('target', 'baseURI')
)

keyup$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))