import { ViewProps } from "./models"

export const Button = ({age,onclick,id, text, type, size}:ViewProps) => {
    return (
        <button id={`${id}${'medium'}`} onClick={onclick} className={type}>
            <h4>{text}</h4>
            <p className="age">{age}</p>
        </button>
    )
}