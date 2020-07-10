/** 
 * forkJoin: Acepta una matriz de ObservableInput o un objeto de
 * diccionario de ObservableInput y devuelve un Observable que emite
 * una matriz de valores exactamente en el mismo orden que la matriz
 * aprobada, o un diccionario de valores en la misma forma que el
 * diccionario pasado. Devuelve el último valor de cada observable.
 * Los ObservableInput deben ser finitos y forkJoin emite los valores
 * una vez que todos los observables se han completado
 * 
 * forkJoin(...sources: any[]): Observable<any>
 * 
 * https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin
*/
