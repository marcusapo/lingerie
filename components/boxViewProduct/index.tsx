import { Arrow } from "../Arrow"
import { Image } from "../Image"
import { viewProductProps } from "./models"
import { Input } from "../Input"
import './style.css'
import { useState } from "react"
import { Button } from "../Button"
import { Box } from "../BoxItem"
import { Footer } from "../footer"

export const BoxViewProduct = ({text}: viewProductProps) => {

    const[count, setCount] = useState<number>(1)

    const More = () => {
        setCount((prevCount) => prevCount + 1)
    }
    
    const Minus = () => {
        if(count > 1)
        setCount((prevCount) => prevCount - 1)
    }

    const ArrowRightP = require('../../assets/ArrowRightP.png')

    const ArrowLeftP = require('../../assets/ArrowLeftP.png')

    const ArrowDownP = require('../../assets/arrowDownP.png')

    const littleCar = require('../../assets/littleCar.png')

    return (
        <section>
            <main>
            <div className="box">
                    <div className="arrowDown">
                        <Image src={ArrowDownP}/>
                    </div>
                <div className="arrowsP">
                    <Image src={ArrowLeftP}/>
                    <Image src={ArrowRightP}/>
                </div>
                <div className="carousselProduct">
                    <div className="selectProduct"></div>
                    <div className="selectProduct"></div>
                    <div className="selectProduct"></div>
                    <div className="selectProduct"></div>
                    <div className="selectProduct"></div>
                    <div className="selectProduct"></div>
                </div>
            </div>
            <div className="details"> 
            <div style={{display:'flex', gap:75}}>
                <p style={{color:'', marginLeft:30, marginTop:30}}>Cores/Modelos</p>
                <p style={{color:'', marginTop:30}}>Tamanhos</p>   
            </div>
                <div className="dadBoxShadow">
                    <div className="boxShadow">
                        <div className="colorPink"></div>
                        <div className="colorGreen"></div>
                        <div className="colorPurple"></div>
                        <div className="colorYellow"></div>
                    </div>
                    <div className="boxShadow">
                        <div className="letterP">P</div>
                        <div className="letterM">M</div>
                        <div className="letterG">G</div>
                        <div className="letterXG">XG</div>
                    </div>
                </div>
                <div className="boxInput">Descrição</div>
                   
                <div className="boxButton">
                    <div style={{flexDirection:'column', marginTop:30}}>
                        <Button onclick={More} type="buttonMore" text="+"/>
                        <Button onclick={Minus} type="buttonMinus" text="-"/>
                    </div>
                    <p className="countNumber">{count}</p>
                    <div style={{display:'flex',flexDirection:'column'}}>
                     <Input maxLenght={9} type="password" placheHolder="00.000-00" style="freight"></Input>
                     <p className="calcFreight">Calcular Frete</p>
                    </div>
                    <div className="boxLittleCar">
                        <p style={{color:'#fff', fontSize:34, fontWeight:'bold'}}>+</p>
                        <Image type="littleCar" src={littleCar}/>
                    </div>
                    <div className="buy">
                        <div className="antiguePrice">
                            <p>de</p>
                            <p >R$ 60,00</p>
                        </div>
                        <div className="newPrice">
                            <p >por</p>
                            <p id="priceView">R$ 52,90</p>
                        </div>
                        <div className="buttonBuy">Comprar</div>
                    </div>
                </div>
            </div>
            </main>
            <h1 className="especity">Especificações</h1>
            <div className="boxEspecity"></div>
            <h2 className="productRelac">Produtos Relacionados</h2>
            <div className="boxProduct">
                <Box id="none2" description="Descrição do Item apresentado" />
                <Box description="Descrição do Item apresentado" />
                <Box description="Descrição do Item apresentado" />
                <Box id="noneCellS" description="Descrição do Item apresentado" />
                <Box id="none" description="Descrição do Item apresentado" />
            </div>
            <Footer/>
        </section>
    )
}