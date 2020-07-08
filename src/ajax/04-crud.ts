import { ajax } from 'rxjs/ajax';
/** 
 * ajax 
 * Peticiones GET, PUT, POST, DELETE
*/

const url = 'https://httpbin.org/delay/1'
// // GET
// ajax.get(url).subscribe(console.log)
// // PUT
// ajax.put(url, {
//   id: 1,
//   nombre: 'Alexander',
// }, {
//   'mi-token': 'ABC123'
// }).subscribe(console.log)
// // POST
// ajax.post(url, {
//   id: 1,
//   nombre: 'Alexander',
// }, {
//   'mi-token': 'ABC123'
// }).subscribe(console.log)
// // DELETE
// ajax.delete(url, {
//   'mi-token': 'ABC123'
// }).subscribe(console.log)

ajax({
  url,
  method: 'DELETE', // 'GET', 'PUT', 'POST, 'DELETE'
  headers: {
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    nombre: 'Alexander'
  }
}).subscribe(console.log)