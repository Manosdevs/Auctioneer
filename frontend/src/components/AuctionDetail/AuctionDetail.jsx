import React from 'react'
import {useState } from 'react-router-dom'
import SwiperDetails from '../Swiper/SwiperDetails'
import Button from '../Button/Button'
import {Hammer } from 'react-bootstrap-icons'
import styles from './AuctionDetail.module.css'

function AuctionDetail({id,name, buy_price, current, longitude, latitude, photos, seller}) {
   




  return (
    <>

      <aside>{photos.forEach((elem) => {
        return <img src={elem} alt={name}/>
      })}</aside>
      <SwiperDetails photos={photos}/>
      <h2>{name}</h2>
      <div>
      <Button text='Current Bid' /> {`$${current}`} <Hammer className={styles.hammer} size={24}/>
      </div>
       <div> 
      <Button text='Buyout' /> {`$${buy_price}`} <Hammer className={styles.hammer} size={24}/>
</div>

      


    
    </>
  )
}

export default AuctionDetail