let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const API = 'https://rickandmortyapi.com/api/character/'

function fetchRequest(url, callback) {
	let xhttp = new XMLHttpRequest()
	xhttp.open('GET', url, true)

	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText))
			} else {
				const error = new Error('Error ' + url)
				return callback(error, null)
			}
		}
	}

	xhttp.send()
}

fetchRequest(API, function (err1, response1) {
	if (err1) return console.error(err1)
	fetchRequest(API + response1.results[0].id, function (err2, response2) {
		if (err2) return console.error(err2)
		fetchRequest(response2.origin.url, function (err3, response3) {
			if (err3) return console.error(err3)
			console.log(response1.info.count)
			console.log(response2.name)
			console.log(response3.dimension)
		})
	})
})