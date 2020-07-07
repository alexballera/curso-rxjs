import { of, from } from 'rxjs';
/** 
 * of: toma argumentos y genera una secuencia
 * from: crea secuencia obs, objeto iterable
*/

const observer = {
  next: val => console.log('next:', val),
  complete: () => console.log('completado')
}


// const src$ = from([1,2,3,4,5])
// const src$ = of(...[1,2,3,4,5])

// const src$ = from('Alexander')
// const src$ = of('Alexander')

// src$.subscribe(observer)

const src$ = from<Promise<Response>>(fetch('https://api.github.com/users/alexballera'))

// src$.subscribe(async(resp) => {

//   console.log(resp)

//   const dataResp = await resp.json()
//   console.log(dataResp)
// })

const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const miIterable = miGenerador();

// for (const iterator of miIterable) {
//   console.log(iterator)
// }

from(miIterable).subscribe(observer)
