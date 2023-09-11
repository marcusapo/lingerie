import { viewButtonProps } from "./models"
import './style.css'

export const ViewButton = ({text,id,color,type, margin,onclick,}:viewButtonProps) => {

    return  (
        <button id={id} onClick={onclick} className={`buttonViewStyle 
        ${'colorOne'} 
        ${margin} 
        ${type}`} color={color}>
        {text}
        </button>
    )
}