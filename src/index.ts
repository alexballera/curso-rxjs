/** 
 * fetchApi
*/

const url = 'https://api.github.com/users?per_page=5'

// Para que se dispare el error hay que manehar el catch en las promesas
const mensajeErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response
}

const fetchPromesa = fetch(url)

fetchPromesa
  .then(mensajeErrores)
  .then(resp => resp.json())
  .then(data => console.log('data:', data))
  .catch(err => console.warn('Error', err))