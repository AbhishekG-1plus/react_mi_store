import React from 'react'
import Offer from './offerSub.js'
import '../styles/offer.css'

const offer = ({offer}) => {
  return (
    <div className='Offersection'>
        {offer.map((item,index)=>(
            <Offer key={item.image} index= {index} src={item.image} link ={item.url} />


        ))}
      
    </div>
  )
}

export default offer
