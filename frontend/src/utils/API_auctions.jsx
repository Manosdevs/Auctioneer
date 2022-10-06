import axios from 'axios'
const BASE_URL = 'http://localhost:8080'
const ALL_URL = '/auctions/'
const DET_URL = '/get-auction/'

export async function getAuctions() {
	try {
		const response = await axios.get(BASE_URL + ALL_URL)

		return response.data
	} catch (err) {
		if (err.response) {
			console.log(err.response.data.message)
		} else {
			console.log(`Error: ${err.message}`)
		}
	}
}

export async function getAuctionDetail(id) {
	try {
		const response = await axios.get(BASE_URL + DET_URL + id)
		return response.data
	} catch (err) {
		if (err.response) {
			console.log(err.response.data.message)
		} else {
			console.log(`Error: ${err.message}`)
		}
	}
}
