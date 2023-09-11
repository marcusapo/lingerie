import React,{useState} from 'react'
import { Input } from '../../components/Input'
import { BigBox } from '../../components/bigBox'
import { Image } from '../../components/Image'
import {Box} from '../../components/BoxItem'
import './style.css'
import { Footer } from '../../components/footer'

export const ProductList = () => {

    const ArrowLeft = require('../../assets/Arrow2.png')

    const ArrowRight = require('../../assets/Arrow.png')

    const[count, setCount] = useState(1)

    const MorePage = () => {
        if(count < 20)
        setCount((prevCount) => prevCount + 1)
    }
    const MinusPage = () => {
        if(count > 1)
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <section >
            <div className='textProductList'>
                <div>
                    <h1 className='departament'>Departamentos</h1>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <h2 className='departament2'>Departamento 2</h2>
                    <div className='textDepartament2'>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div>
                    <h1 className='departament'>Departamentos</h1>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <h2 className='departament2'>Departamento 2</h2>
                    <div className='textDepartament2'>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div>
                    <h1 className='departament'>Departamentos</h1>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <h2 className='departament2'>Departamento 2</h2>
                    <div className='textDepartament2'>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <div className='dadCell'>
                <div className='subMenu'>
                    <p>Departamentos</p>
                    <p>Departamentos</p>
                    <p>Departamentos</p>
                    <p>Departamentos</p>
                </div>
                <div className='boxInput'>
                    <Input style='input' type='text' placheHolder=''/>
                </div>
                <BigBox type='bBProductList'>
                    <div className='dadProductsList'>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box id='none' type="itemBigBox" description="Descrição do item apresentado"/>
                    </div>
                    <div className='dadProductsList'>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box id='none' type="itemBigBox" description="Descrição do item apresentado"/>
                    </div>
                    <div className='dadProductsList'>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box type="itemBigBox" description="Descrição do item apresentado"/>
                        <Box id='none' type="itemBigBox" description="Descrição do item apresentado"/>
                    </div>
                    <div className='pages'>
                            {count >= 2 &&
                                <Image onClick={MinusPage} type='pagesArrowL' src={ArrowLeft}/>
                            }
                            <p className='numberPages'>{count}</p>
                            <p className='of'>de</p>
                            <p className='numberPages'>20</p>
                            {count <= 20 &&
                                <Image onClick={MorePage} type='pagesArrowR' src={ArrowRight}/>
                            }
                    </div>
                </BigBox>
            </div>
        </section>
    )
}