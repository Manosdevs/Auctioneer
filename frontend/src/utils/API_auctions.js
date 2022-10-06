import axios from 'axios'
const BASE_URL = 'http://localhost:8080'
const API_URL = '/auctions/'

export async function getAuctions() {
	try {
		const response = await axios.get(BASE_URL + API_URL)

		return response.data
	} catch (err) {
		if (err.response) {
			console.log(err.response.data.message)
		} else {
			console.log(`Error: ${err.message}`)
		}
	}
}
