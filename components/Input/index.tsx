import { inputProps } from "./models"
import './style.css'

export const Input = ({type, 
    placheHolder,
    style,
    maxLenght}
    :inputProps) => {
    return (
        <input type={type} maxLength={maxLenght} className={style} placeholder={placheHolder}></input>
    )
}