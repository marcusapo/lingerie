import { StoreBox } from "../storeBox"
import './style.css'

export const Continue = () => {
    return (
        <StoreBox type="departament" >
            <h1>Departamentos</h1>
            <main className="boxSquare">
                <div className="squarePink"></div>
                <div className="squarePink"></div>
                <div className="squarePink"></div>
                <div id="noneCellS" className="squarePink"></div>
                <div id="noneCellS" className="squarePink"></div>
                <div id="noneCell" className="squarePink"></div>
                <div id="noneCell" className="squarePink"></div>
            </main>
        </StoreBox>
    )
}