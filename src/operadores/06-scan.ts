import { from } from 'rxjs'
import { scan, reduce, map } from 'rxjs/operators';
/** 
 * scan: funciona como reduce JS sólo que va emitiendo la suma acumulada
 * aplica una función acumulativa
 * https://rxjs-dev.firebaseapp.com/api/operators/scan
 * 
*/
const numeros = [1,2,3,4,5]

const totalAcumulador = (acc:number, cur:number) => acc + cur

// Reduce
from(numeros).pipe(
  reduce(totalAcumulador, 0)
)
.subscribe(console.log)

// Scan
from(numeros).pipe(
  scan(totalAcumulador, 0)
)
.subscribe(console.log)

// Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number
}
const user: Usuario[] = [
  {id: 'fher', autenticado: false, token: null},
  {id: 'fher', autenticado: true, token: 'ABC'},
  {id: 'fher', autenticado: true, token: 'ABC123'},
]

const state$ = from(user).pipe(
  scan<Usuario>((acc, curr) => {
    return {...acc, ...curr}
  }, {edad: 33})
)

const id$ = state$.pipe(
  map(state => state.id)
)
id$.subscribe(console.log)