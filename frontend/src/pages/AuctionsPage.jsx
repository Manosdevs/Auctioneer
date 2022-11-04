import { useState, useEffect } from 'react'
import { useAxios } from '../utils/Axios_hook'
import { AuctionItem } from '../components/Auction/Auction'
import { Link } from 'react-router-dom'
import { GetAuctions } from '../components/APICalls/auctionCalls'

import React from 'react'
import Searchbar from '../components/Searchbar/Searchbar'
import HomeAuctions from '../components/HomeAuctions/HomeAuctions'

export function AuctionsPage() {

	const {response, error, loading } = GetAuctions()


	
	return (
		<div className='App'>
			< Searchbar />
			<h1>Posts</h1>
			<HomeAuctions />
			
		</div>
	)
}
