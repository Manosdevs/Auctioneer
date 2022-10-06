import { useLoaderData } from 'react-router-dom'
import { getAuctions } from '../utils/API_auctions'
import Auctions from '../components/Auctions'

export default function AuctionsPage() {
	const loaderData = useLoaderData()

	return (
		<>
			<h1>auctions</h1>
			<Auctions activeAuctions={loaderData} />
		</>
	)
}

export function loader() {
	return getAuctions()
}
