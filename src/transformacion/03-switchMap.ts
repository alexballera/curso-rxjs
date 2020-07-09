import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsers } from '../interfaces/github-users.interface';

/** 
 * switchMap: Proyecta cada valor fuente en un Observable que se
 * fusiona en el Observable de salida, emitiendo valores solo del
 * Observable proyectado más recientemente (el último). Ideal para 
 * realizar un search dinámico
 * https://rxjs-dev.firebaseapp.com/api/operators/switchMap
*/

// Referencias
const body = document .querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')
body.append(textInput, orderList)

const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios)
  orderList.innerHTML = ''

  for (const usuario of usuarios) {
    const li = document.createElement('li')
    
    const img = document.createElement('img')
    img.src = usuario.avatar_url

    const anchor  = document.createElement('a')
    anchor.href   = usuario.html_url
    anchor.text   = 'Ver página'
    anchor.target = '_blank'

    li.append(img)
    li.append(usuario.login + ' ')
    li.append(anchor)

    orderList.append(li)
  }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, string>('target', 'value'),
  mergeMap<string, Observable<GithubUsers>>(texto => ajax.getJSON(
    `https://api.github.com/search/users?q=${texto}`
  )),
  pluck<any, GithubUser[]>('items')
)//.subscribe(mostrarUsuarios)

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
  pluck('target', 'value'),
  switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log)
