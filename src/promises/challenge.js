const fetchRequest = require('../utils/fetchData')

const API = 'https://rickandmortyapi.com/api/character/'

fetchRequest(API)
  .then((response) => {
    console.log(response.info.count)
    return fetchRequest(`${API}${response.results[0].id}`)
  })
  .then(response => {
    console.log(response.name)
    return fetchRequest(response.origin.url)
  })
  .then(response => {
    console.log(response.dimension)
  })
  .catch((error) => console.error(error))
