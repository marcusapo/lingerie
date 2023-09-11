import { horizontalImgProps } from "./models"
import { Button } from "../Button"
import './style.css'

export const ImgHorizontal =  ({src, type, }: horizontalImgProps) => {
    return (
         <div className={type}>
            <div className="shadowMid">
                <h1>Buscando algo mais...<br/> quente?</h1>
                <Button text="Entrar" type="" age="+18"/>
            </div>
         </div>
    )
}