import { ajax } from 'rxjs/ajax';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
/** 
 * forkJoin: Caso de uso más común
 * 
 * forkJoin(...sources: any[]): Observable<any>
 * 
 * https://rxjs-dev.firebaseapp.com/api/index/function/forkJoin
*/

const GITHUB_API_URL = 'https://api.github.com/users'
const GITHUB_USER = 'alexballera'

forkJoin({
  usuario: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}`
  ),
  repos: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/repos`
  ).pipe(
    catchError(err => of([]))
  ),
  gists: ajax.getJSON(
    `${GITHUB_API_URL}/${GITHUB_USER}/gists`
  ),
}).pipe(
  catchError(err => of(err))
)
.subscribe(console.log)