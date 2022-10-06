import { Link } from 'react-router-dom'

export default function Auctions({ activeAuctions }) {
	return (
		<ul>
			{activeAuctions.map((auction) => (
				<li key={auction.id}>
					<Link to={auction.id.toString()}>
						<h2>{auction.name}</h2>
					</Link>
				</li>
			))}
		</ul>
	)
}
