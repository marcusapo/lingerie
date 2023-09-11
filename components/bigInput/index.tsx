import { BigInputProps } from "./models"
import './style.css'

export const BigInput = ({placeholder,
    style,
    maxlenght,
    id,
    type}
    :BigInputProps) => {
    return (
        <div id="inputSmall" className="input">
            <input className={style} maxLength={maxlenght} id={`${'input2'}`} placeholder={placeholder} type={type} />
        </div>
    )
}