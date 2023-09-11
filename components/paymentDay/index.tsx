import './style.css'
import { Image } from '../Image'
import { PaymentDayProps } from './models'

export const PaymentDay = ({id}:PaymentDayProps) => {

    const Dolar = require('../../assets/$.png')

    const DolarComplete = require('../../assets/$complete.png')

    return (
        <section id={id} className='boxPayment'>
        <div className='boxTotally'>
            <h1>Total hoje</h1>
            <div className='boxInfos'>
                <Image type='dolar' src={Dolar}/>
                <Image type='dolarComplete' src={DolarComplete}/>
                <p className='datePayment'>Terça</p>
                <p id='smallPrice2' className='weekPayment'>05/09</p>
            </div>
        </div>
    </section>
    )
}