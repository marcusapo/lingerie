import { ArrowProps } from "./models"
import './style.css'

export const Arrow = ({src,id}:ArrowProps) => {
    return (
        <img className={`${'arrow'} ${'pink'}`} id={id} src={src} />
    )
}