import React from 'react'
import { useParams } from 'react-router-dom'
import {GetSingleAuction} from '../components/APICalls/auctionCalls'
import AuctionDetail from '../components/AuctionDetail/AuctionDetail'




function DetailsPage() {

    const {id} = useParams()

    const {response, error, loading } = GetSingleAuction(id)
   response && console.log(response)

  return (
    <>
    {response && <AuctionDetail
id={response.id}
name={response.name}
buy_price={response.buy_price} 
current={response.current}
longitude={response.longitude}
latitude={response.latitude}
photos={response.photos}
seller ={response.seller}/>     
}</>
  )
}

export default DetailsPage