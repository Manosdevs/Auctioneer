import axios from 'axios'
import { useState, useEffect } from 'react'

axios.defaults.baseURL = 'http://localhost:8080'

export const useAxios = (axiosParams) => {
	const [response, setResponse] = useState(undefined)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	const fetchData = async (params) => {
		try {
			const result = await axios.request(params)
			setResponse(result.data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData(axiosParams)
	}, [])

	return { response, error, loading }
}
