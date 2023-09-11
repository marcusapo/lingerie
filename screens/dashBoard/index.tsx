import { Payment } from '../../components/payment'
import {Box} from '../../components/BoxItem'
import './style.css'
import { Arrow } from '../../components/Arrow'
import { ViewButton } from '../../components/viewButton'
import { SaleInformation } from '../../components/saleInformation'
import { SideBar } from '../../components/sideBar'
import { Menu } from '../../components/Menu'
import { PaymentDay } from '../../components/paymentDay'


export const DashBoard = () => {

    const Arrow1 = require('../../assets/ArrowLeftP.png')
    const Arrow2 = require('../../assets/ArrowRightP.png')

    return(
        <div className='F1440'>
            <main style={{display:'flex'}}>
                <Menu/>
                <SideBar/>
                <div className='boxPaymentDash'>
                    <div className='boxPaymentBox'>
                        <Payment id='mPayment'/>
                        <PaymentDay/>
                        <Payment id='none10'/>
                        <Payment id='onlyCell'/>
                    </div>
                    <div className='dashBox'>
                        <p id='productMore'>Produtos mais vendidos</p>
                        <Arrow id='A1' src={Arrow1}/>
                        <Box id='m10' description='Descrição do item apresentado'/>
                        <Box description='Descrição do item apresentado'/>
                        <Box id='none10' description='Descrição do item apresentado'/>
                        <Box id='none' description='Descrição do item apresentado'/>
                        <Arrow id='A2' src={Arrow2}/>
                    </div>
                    <div className='dashBoxSell'>
                        <div className='titleDash'>
                            <h1>Últimas vendas</h1>
                            <ViewButton text='Ver todos'/>
                        </div>
                        <div className='saleBox'>
                            <SaleInformation/>
                            <SaleInformation/>
                            <SaleInformation id='none'/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}