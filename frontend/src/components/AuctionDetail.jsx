import { Link } from 'react-router-dom'

export default function AuctionDetail({ auction }) {
	console.log(auction)

	return (
		<>
			<h1>{auction.id}</h1>
			<h1>Country: {auction.country}</h1>
			<h1>Seller: {auction.seller_id}</h1>
			<h1>Buy Price: {auction.buy_price}</h1>
		</>
	)
}
