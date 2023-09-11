import { Arrow } from '../Arrow'
import { Box } from '../BoxItem'
import { StoreBox } from '../storeBox'
import React, {useState} from 'react'
import { ViewButton } from '../viewButton'
import './style.css'
import { ProductList } from '../../screens/productList'

export const Promotion = () => {

    const ArrowIconLeft = require('../../assets/Arrow.png')

    const ArrowIconRight = require('../../assets/Arrow2.png')

    const [showProductList, setShowProductList] = useState(false)

    const handleClickAllProduct = () => {
        setShowProductList(!showProductList)
    }

    return (
      
        <section>
          <StoreBox id='boxPromotion' type='boxMargin'>
                <div className='promotion'>
                  <h5 id='textPromotion'>Em promoção <br />só hoje!</h5>
                  <ViewButton id='bttPr' type='buttonPromotion' onclick={handleClickAllProduct} text='Ver todos' />
                </div>
                <main className='boxItems'>
                  <Arrow id='promotionL' src={ArrowIconRight}/>
                  <Box description='Descrição do Item apresentado'/>
                  <Box description='Descrição do Item apresentado'/>
                  <Box id='noneCell' description='Descrição do Item apresentado'/>
                  <Arrow id='promotionR' src={ArrowIconLeft}/>
                </main>
          </StoreBox>
        </section>
    )
}