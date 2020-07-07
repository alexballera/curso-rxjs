import {range, from, fromEvent} from 'rxjs'
import { tap, map } from 'rxjs/operators';
/** 
 * tap: retorna el mismo elemento con fines de depuración
 * o disparar eventos secundarios
 * https://rxjs-dev.firebaseapp.com/api/operators/tap
 * 
*/

const texto = document.createElement('div')
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nulla, posuere sed molestie in, pulvinar at metus. Morbi tristique blandit tortor at viverra. Curabitur lorem turpis, convallis quis consectetur eu, viverra feugiat felis. Sed odio orci, tincidunt sed magna non, accumsan auctor sem. Vestibulum ut justo eget libero cursus malesuada. Mauris rutrum, nisi nec blandit dictum, libero ipsum vestibulum eros, id consequat eros magna ut erat. Quisque condimentum, dolor sed finibus volutpat, magna metus eleifend mi, at tempor tellus justo a purus. Suspendisse justo odio, rutrum id volutpat id, condimentum non erat. Vivamus urna ligula, porta ac quam eu, luctus pellentesque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur finibus metus. Donec in nibh eu ante gravida congue. Donec ultrices urna ut lorem dictum, ac dignissim orci pharetra. Donec commodo ex sit amet suscipit lacinia.
<br/><br/>
Quisque tincidunt, tortor eu sollicitudin volutpat, ex diam semper lectus, sed volutpat enim leo id risus. Pellentesque condimentum risus nec turpis tincidunt congue. Donec a tincidunt leo. Ut velit lacus, imperdiet eu risus ac, congue sagittis nibh. Duis nec nibh nec metus feugiat lobortis. Sed mollis fringilla elit. Nam semper at arcu sed luctus. Curabitur fringilla in arcu eget efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt lacinia erat laoreet auctor. In imperdiet neque massa, non faucibus ipsum tempus vitae. Fusce ut lorem sed nibh vehicula interdum.
<br/><br/>
Nullam tempor, massa vitae eleifend tristique, diam sem rhoncus turpis, vitae consequat est velit eu urna. Curabitur malesuada iaculis est nec laoreet. Fusce nec metus sit amet eros tincidunt feugiat. Mauris in magna ut sapien laoreet fermentum et in magna. Nam ut nisl malesuada, mattis lorem vel, pharetra dolor. Sed eleifend porttitor quam, scelerisque bibendum odio elementum eu. Vestibulum vitae dapibus nunc, at ultrices urna. Mauris feugiat lectus vel dapibus tincidunt. In porttitor leo nec fringilla commodo. Vivamus vel elementum mauris. Donec dignissim nulla a mollis aliquam. Sed dolor mauris, placerat ac mollis nec, laoreet ac est. Cras mollis dolor sit amet fermentum accumsan.
<br/><br/>
Ut tincidunt ac dolor vel aliquet. Phasellus tincidunt iaculis eleifend. Curabitur non eleifend purus, non gravida augue. Donec mollis nibh tellus, id sodales nunc accumsan id. Morbi commodo dolor sed lacinia vulputate. Nullam euismod luctus lectus, vitae placerat lorem scelerisque quis. Pellentesque convallis erat eget nibh semper sodales. Sed nisi justo, luctus a blandit vel, pulvinar in lectus. Donec sagittis, felis vel consequat molestie, lectus lectus dignissim ex, ut euismod velit magna nec orci.
<br/><br/>
Pellentesque sit amet urna eleifend, eleifend nisl eget, faucibus nisi. Sed lobortis faucibus feugiat. Fusce consectetur diam aliquam justo eleifend, sit amet facilisis ante pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi elit, sollicitudin a interdum finibus, pulvinar nec dui. Proin ullamcorper, lorem et vehicula lobortis, purus quam tristique erat, vel pulvinar felis urna eu neque. Ut quis urna mi. Donec quis lorem non erat fringilla hendrerit vitae id urna. Donec suscipit bibendum nisi a efficitur. Nulla et sagittis mi, at finibus ante. Sed aliquet ultricies eros sed tincidunt. Mauris et tincidunt justo, eget sodales urna. Praesent consequat tristique metus, nec tincidunt turpis iaculis vitae. Donec sit amet orci sit amet ex eleifend bibendum. Curabitur viverra felis a nunc facilisis, ac aliquam ipsum vehicula. Vestibulum nec luctus nisl.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus nulla, posuere sed molestie in, pulvinar at metus. Morbi tristique blandit tortor at viverra. Curabitur lorem turpis, convallis quis consectetur eu, viverra feugiat felis. Sed odio orci, tincidunt sed magna non, accumsan auctor sem. Vestibulum ut justo eget libero cursus malesuada. Mauris rutrum, nisi nec blandit dictum, libero ipsum vestibulum eros, id consequat eros magna ut erat. Quisque condimentum, dolor sed finibus volutpat, magna metus eleifend mi, at tempor tellus justo a purus. Suspendisse justo odio, rutrum id volutpat id, condimentum non erat. Vivamus urna ligula, porta ac quam eu, luctus pellentesque nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur finibus metus. Donec in nibh eu ante gravida congue. Donec ultrices urna ut lorem dictum, ac dignissim orci pharetra. Donec commodo ex sit amet suscipit lacinia.
<br/><br/>
Quisque tincidunt, tortor eu sollicitudin volutpat, ex diam semper lectus, sed volutpat enim leo id risus. Pellentesque condimentum risus nec turpis tincidunt congue. Donec a tincidunt leo. Ut velit lacus, imperdiet eu risus ac, congue sagittis nibh. Duis nec nibh nec metus feugiat lobortis. Sed mollis fringilla elit. Nam semper at arcu sed luctus. Curabitur fringilla in arcu eget efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt lacinia erat laoreet auctor. In imperdiet neque massa, non faucibus ipsum tempus vitae. Fusce ut lorem sed nibh vehicula interdum.
<br/><br/>
Nullam tempor, massa vitae eleifend tristique, diam sem rhoncus turpis, vitae consequat est velit eu urna. Curabitur malesuada iaculis est nec laoreet. Fusce nec metus sit amet eros tincidunt feugiat. Mauris in magna ut sapien laoreet fermentum et in magna. Nam ut nisl malesuada, mattis lorem vel, pharetra dolor. Sed eleifend porttitor quam, scelerisque bibendum odio elementum eu. Vestibulum vitae dapibus nunc, at ultrices urna. Mauris feugiat lectus vel dapibus tincidunt. In porttitor leo nec fringilla commodo. Vivamus vel elementum mauris. Donec dignissim nulla a mollis aliquam. Sed dolor mauris, placerat ac mollis nec, laoreet ac est. Cras mollis dolor sit amet fermentum accumsan.
<br/><br/>
Ut tincidunt ac dolor vel aliquet. Phasellus tincidunt iaculis eleifend. Curabitur non eleifend purus, non gravida augue. Donec mollis nibh tellus, id sodales nunc accumsan id. Morbi commodo dolor sed lacinia vulputate. Nullam euismod luctus lectus, vitae placerat lorem scelerisque quis. Pellentesque convallis erat eget nibh semper sodales. Sed nisi justo, luctus a blandit vel, pulvinar in lectus. Donec sagittis, felis vel consequat molestie, lectus lectus dignissim ex, ut euismod velit magna nec orci.
<br/><br/>
Pellentesque sit amet urna eleifend, eleifend nisl eget, faucibus nisi. Sed lobortis faucibus feugiat. Fusce consectetur diam aliquam justo eleifend, sit amet facilisis ante pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi elit, sollicitudin a interdum finibus, pulvinar nec dui. Proin ullamcorper, lorem et vehicula lobortis, purus quam tristique erat, vel pulvinar felis urna eu neque. Ut quis urna mi. Donec quis lorem non erat fringilla hendrerit vitae id urna. Donec suscipit bibendum nisi a efficitur. Nulla et sagittis mi, at finibus ante. Sed aliquet ultricies eros sed tincidunt. Mauris et tincidunt justo, eget sodales urna. Praesent consequat tristique metus, nec tincidunt turpis iaculis vitae. Donec sit amet orci sit amet ex eleifend bibendum. Curabitur viverra felis a nunc facilisis, ac aliquam ipsum vehicula. Vestibulum nec luctus nisl.
`
const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

const calcularPorcentajeScroll = event => {

  const {
    scrollHeight,
    scrollTop,
    clientHeight,
  } = event.target.documentElement

  return (scrollTop / (scrollHeight - clientHeight)) * 100
}

// Streams

const scroll$ = fromEvent(document, 'scroll')

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
  // map(event => calcularPorcentajeScroll(event))
  map(calcularPorcentajeScroll),
  tap(console.log)
)

progress$.subscribe( porcentaje => {
  progressBar.style.width = `${porcentaje}%`
})