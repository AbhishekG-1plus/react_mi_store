import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/productReviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(

        <ProductReviewCard price = {item.price} name ={item.name} image = {item.image} review ={item.review} index ={index} key={item.key}/>

        ))}
      
    </div>
  )
}

export default ProductReviews
