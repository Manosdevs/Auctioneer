import { useLoaderData } from 'react-router-dom'
import { getAuctionDetail } from '../utils/API_auctions'
import AuctionDetail from '../components/AuctionDetail'

export default function AuctionDetailPage() {
	const loaderData = useLoaderData()

	return (
		<>
			<h1>auctions</h1>
			<AuctionDetail auction={loaderData} />
		</>
	)
}

export function loader({ params }) {
	const auctionId = params.id
	return getAuctionDetail(auctionId)
}
