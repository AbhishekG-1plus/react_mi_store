import React from 'react'

const offerSub = ({src,link,index}) => {
  return (
    <a heref ={link}>
    <img src ={src} alt={`${index}Offer`} /> 
    </a>
  )
}

export default offerSub
