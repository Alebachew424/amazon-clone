import React from 'react'
import LayOut from '../../Componentes/LayOut/LayOut'
import Carousel from '../../Componentes/Carousel/Carousel'
import Catagoary from '../../Componentes/Catagoary/Catagory'
import Product from '../../Componentes/Product/Product'

function Landing() {
  return (
        <LayOut>
            <Carousel />
      <Catagoary />
      <Product />
        </LayOut>
      
   
  )
}

export default Landing
