import { storeProps } from './models'
import './style.css'

export const StoreBox = ({children,id, type}:storeProps) => {
    return (
        <div id={id} className={`${'storeBox'} ${type}`}>
            {children}
        </div>
    )
}