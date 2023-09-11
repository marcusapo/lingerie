import { bigBoxType } from './models'
import './style.css'

export const BigBox = ({children,type,id, color}:bigBoxType) => {
    return (
        <div id={id}  className={`${'bigBox'} ${type}`}>
            {children}
        </div>
    )
}