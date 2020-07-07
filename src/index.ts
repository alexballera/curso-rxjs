import {range, fromEvent} from 'rxjs'
import { map, pluck, mapTo} from 'rxjs/operators';
/** 
 * map: extraer, transformar información
 * pluck: extrae un valor del objeto
 * mapTo: emite cualquier valor predeterminado
 * https://rxjs-dev.firebaseapp.com/api/operators/map
 * https://rxjs-dev.firebaseapp.com/api/operators/pluck
 * https://rxjs-dev.firebaseapp.com/api/operators/mapTo
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

const keyupMapTo$ = keyup$.pipe(
  mapTo('Tecla presionada')
)

keyup$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))
keyupMapTo$.subscribe(code => console.log('mapTo', code))