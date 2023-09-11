import React from 'react'
// import Slider from 'react-slick'
import './carrousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'
import { Button } from '../../components/Button'
import { Image } from '../../components/Image'
import { Promotion } from '../../components/Promotion'
import { Continue } from '../../components/Continue'
import { ImgHorizontal } from '../../components/imgHorizontal'
import { AllProduct } from '../../components/AllProduct'
import { ProductList } from '../productList'
import { Footer } from '../../components/footer'

export const Home = () => {

    

    const verifyBox = require('../../assets/verifyIcon.png')

    return (
        <section>
            <main className='album'>
                    <div className='mainPhoto'><p>Lorem ipsum dolor sit amet, consectetur <br/> 
                        adipiscing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqua. Ut <br />
                        enim ad minim veniam, quis nostrud <br />
                        exercitation ullamco laboris nisi ut aliquip ex ea <br />
                        commodo consequat</p>
                        <div className='boxSelectCarousel'>
                            <div className='selectCarousel'></div>
                            <div className='selectCarousel'></div>
                            <div className='selectCarousel'></div>
                        </div>
                    </div>
                <div className='rightPhoto'>
                    <div className='shadowRightPhoto'>
                        <p>
                            <h1>Buscando <br/>algo a mais?</h1>
                        </p>
                        <Button age='+18' text='Entrar' type='medium'/>
                    </div>
                        <div className='iconBox'>
                            <button className='whatsappBox'>
                                <img src='data:image/png;base64,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'/>
                            </button>
                            <button className='verifyBox'>
                                <Image src={verifyBox}/>
                            </button>
                        </div>
                </div>
            </main>
                    <Promotion/>
                    <Continue/>
                    <ImgHorizontal type='mid'/>
                    <AllProduct/>
                    <Footer/>
        </section>
    )
} 
            