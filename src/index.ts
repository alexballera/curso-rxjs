
/** 
 * exhaustMap: Proyecta cada valor fuente en un Observable
 * que se fusiona en el Observable de salida solo si el
 * Observable proyectado anterior se ha completado.
 * Mantiene una sola emisión activa, para poder emitir el siguiente
 * debe esperar terminar el anterior
 * https://rxjs-dev.firebaseapp.com/api/operators/exhaustMap
 * https://reqres.in/
*/
