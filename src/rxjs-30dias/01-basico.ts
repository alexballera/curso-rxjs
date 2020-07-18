import { fromEvent } from 'rxjs';

// Creamos los botones
let button1 = document.createElement('button')
let button2 = document.createElement('button')

// Agregamos textos a los botones
button1.innerHTML = 'Click Button'
button2.innerHTML = 'Click RxJs'

// Agregamos los botones al body
let body = document.querySelector('body')
body.append(button1, button2)

// Creamos addEventListener con JS
button1.addEventListener('click', () => console.log('Click button'))

// Creamos fromEvent con RxJS equivalente de addEventListener de JS
fromEvent(button2, 'click').subscribe(() => console.log('Click RxJs'))
