import { asyncScheduler } from 'rxjs';
/** 
 * asyncScheduler
 * https://rxjs-dev.firebaseapp.com/api/index/const/asyncScheduler
 * es una subscripción y se pueden ejecutar/configurar las siguientes
 * funciones de JS
 * setTimeout(() =>{}, 3000)
 * setInterval(() =>{}, 3000) no se puede configurar con arrow function
*/

const saludar = () => console.log('Hola mundo!')
const saludar2 = nombre => console.log(`Hola ${nombre}`)

// asyncScheduler.schedule(saludar, 2000)
// asyncScheduler.schedule(saludar2, 2000, 'Alexander')

const subs =asyncScheduler.schedule(function(state) {

  console.log('state', state)
 
  this.schedule(state + 1, 1000)
}, 3000, 0)

// setTimeout(() => {
//   subs.unsubscribe()
// }, 6000);

// Es el mismo resultado que con setTimeout
asyncScheduler.schedule(() => subs.unsubscribe(), 6000)