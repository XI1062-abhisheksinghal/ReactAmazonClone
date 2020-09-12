import React from 'react'
import "./Home.css";
import Product from './Product';

export default function Home() {
    return (
        <div className="home">

            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/HHSPersonalCare_3000x1200._CB410388848_.jpg"
            alt=""/>

            {/* product id, title, price, rating , image */}

          <div className ="home__row">
            <Product id="12345"
              title="Brown panda for kids"
              price={11.96}
              rating={5}
              image="http://pngimg.com/uploads/bear/bear_PNG23468.png"
              />

              <Product id="12345"
              title="Brown panda for kids"
              price={11.96}
              rating={5}
              image="http://pngimg.com/uploads/bear/bear_PNG23468.png"
              />
            {/* Product */}
          </div>
        </div>
    )
}
