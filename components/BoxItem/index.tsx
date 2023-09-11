import { BoxType } from "./models"
import './style.css'
import { Image } from "../Image"
import { useState } from "react"

import { BoxViewProduct } from "../boxViewProduct"

const Favorite = require('../../assets/favoriteComp.png')

const FavoriteIncomp = require('../../assets/favoriteIncomp.png')

const Bra = require('../../assets/bra.png')

const Verse = require('../../assets/verseBra.png')

export const Box = ({
    size,
    description,
    id,
    type,
    offPrice = '52,00', 
    offReal = 'R$',
    realPrice = 'R$',
    price = '52,90'}:
    BoxType) => {

    const [showComponent, setShowComponent] = useState(false)

    const handleClickComponent = () => {
        setShowComponent(!showComponent)
    }

    const [showFav, setShowFav] = useState(false);

    const handleClickFav = () => {
        setShowFav(!showFav);
    };

    return (
        <section>
            <div onClick={handleClickComponent} id={id} className="boxItem">
                <div className="verseBox">
                    <div className="selectInfo">
                        <div className="letterMw">
                            <div className="letterMwSize">
                                <p>M</p>
                            </div>
                            <div className="letterMwMsg">
                                <div className="msgSize">Tamanho:M</div>
                            </div>
                        </div>
                        <div className="colorBlack">
                            <div className="msgColor">Cor:Preto</div>
                        </div>
                    </div>
                    <div className="boxFavorite">
                        {!showFav ? ( 
                     <Image onClick={handleClickFav} type="favoriteComp" src={Favorite}/>
                     ) : ( 
                        <Image type="favoriteIncomp" src={FavoriteIncomp}/>  
                        )  
                    }
                     </div>
                </div>
                <Image type="verseImg" src={Verse}/>
                <Image type="imgBox" src={Bra}/>
                <p className="textDescription">{description}</p>
                <div className="prices">
                    <div className="offPrice">
                        <div className="de">de</div>
                        <p>{offReal} {offPrice}</p>
                    </div>
                    <div className="price">
                        <div className="for">por</div>
                        <div className="priceTotal">{realPrice} {price}</div>
                    </div>
                </div>
            </div>
            <div className="teste"></div>
        </section>
    )
} 