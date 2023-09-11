import { Image } from '../Image'
import { paymentProps } from './models'
import './style.css'

export const Payment = ({datePayment,
    id,
    realPayment="R$", 
    finalPayment="1.532,98"}:
    paymentProps) => {

    const Dolar = require('../../assets/$.png')

    const DolarComplete = require('../../assets/$complete.png')

    return (
        <section id={id} className='boxPayment'>
            <div className='boxTotally'>
                <h1>Total hoje</h1>
                <div className='boxInfos'>
                    <Image type='dolar' src={Dolar}/>
                    <Image type='dolarComplete' src={DolarComplete}/>
                    <div className='boxPaymentNumber'>
                        <p className='datePayment'>{realPayment}</p>
                        <p className='weekPayment'>1.532,98</p>
                    </div>
                </div>
            </div>
        </section>
    )
} 