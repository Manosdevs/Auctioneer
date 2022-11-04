import React from 'react'
import { AuctionItem } from '../Auction/Auction'
import { Link } from 'react-router-dom'
import {GetAuctions} from '../APICalls/auctionCalls'

function HomeAuctions() {

    const {response, error, loading } = GetAuctions()

  return (
    <>

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
    </>
  )
}

export default HomeAuctions

