import { useState, useEffect } from 'react'
import { useAxios } from '../utils/Axios_hook'
import { AuctionItem } from '../components/Auction/Auction'
import { Link } from 'react-router-dom'

import React from 'react'

export function AuctionsPage() {
	const { response, loading, error } = useAxios({
		method: 'GET',
		url: '/auctions',
		headers: {
			accept: '*/*',
		},
	})

	/*     response.map((elem) => {
        ;<div>
            <img src={elem.photos[0].URL} alt={elem.name} />
            <h1>{elem.name}</h1>
            <h2>{elem.buy_price}</h2>
        </div>
    })} */

	if (response) {
		console.log(response)
	}

	return (
		<div className='App'>
			<h1>Posts</h1>

			{loading ? (
				<p>loading...</p>
			) : (
				<div>
					{error && (
						<div>
							<p>{error.message}</p>
						</div>
					)}
					<div>
						{' '}
						{response &&
							response.map((elem, idx) => {
								return (
									<Link to={`/auctions/${elem.id}`}>
										<AuctionItem
											key={idx}
											title={elem.name}
											image={elem.photos[0].URL}
											price={elem.buy_price}
										/>
									</Link>
								)
							})}
					</div>
				</div>
			)}
		</div>
	)
}
