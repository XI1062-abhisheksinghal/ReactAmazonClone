import React from 'react'
import "./Product.css";

export default function Product({id,title,price,rating,image}) {
    return (
        <div className="product">
            <div className="product__info">
            <p> {title}</p>
            <p className="product__price">
                <small> $</small>
                <string>{price}</string>
            </p>
            <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((_)=>(
                   <p>@</p>
                  ))}
            </div>
            </div>
            <img src={image} alt=""/>
            <button> Add to basket</button>
            
        </div>
    )
}
