const fetchRequest = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'

const requestFunction = async (url) => {
  try {
    const charactersRequest = await fetchRequest(url)
    const characterRequest = await fetchRequest(`${API}${charactersRequest.results[0].id}`)
    const characterOriginRequest = await fetchRequest(characterRequest.origin.url)

    console.log(charactersRequest.info.count)
    console.log(characterRequest.name)
    console.log(characterOriginRequest.dimension)
  } catch (err) {
    console.error(err)
  }
}

console.log('Before')
requestFunction(API)
console.log('After')
