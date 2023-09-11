import './style.css'
import { saleProps } from './models'

export const SaleInformation = ({name,id}:saleProps) => {
    return (
        <main id={id} className='boxSale'>
            <p id='nameSale'>Arnaldo Armando <br /> Aparecida</p>
                <div id='gray' className='boxDescription'>
                    <p id='descriptionSale'>Descrição do produto</p>
                    <p id='priceSale'>R$15,59</p>
                </div>
                <div className='boxDescription'>
                    <p id='descriptionSale'>Descrição do produto</p>
                    <p id='priceSale'>R$15,59</p>
                </div>
                <div id='gray' className='boxDescription'>
                    <p id='descriptionSale'>Descrição do produto</p>
                    <p id='priceSale'>R$15,59</p>
                </div>
                <div className='boxDescription'>
                    <p id='descriptionSale'>Descrição do produto</p>
                    <p id='priceSale'>R$15,59</p>
                </div>
                <div id='rating'>
                    +5
                </div>
                <div className='adressSale'>
                    <p>Endereço de entrega</p>
                </div>
                <div className='paymentBox'>
                    <div id='creditPayment'>Créd. á vista</div>
                    <div id='totalPayment'>
                        <p>R$</p>
                        <p className='price'>153,59</p>
                    </div>
                </div>
        </main>
    )
}