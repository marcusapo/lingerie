import './style.css'
import { useState } from "react"
import { BigInput } from "../../components/bigInput"
import { Menu } from "../../components/Menu"
import { SideBar } from "../../components/sideBar"
import { Image } from '../../components/Image'

export const Client = () => {

    const ArrowR = require('../../assets/ArrowRightP.png')

    const ArrowL = require('../../assets/ArrowLeftP.png')

    const[count, setCount] = useState(1)

    const More = () => {
        setCount(count + 1)
    }

    const Minus = () => {
        setCount(count - 1)
    }

    return (
        <section>
            <div style={{display:'flex'}}>
                <Menu/>
                <SideBar/>
                <div className="boxClient">
                    <div className='noneCell'>
                        <BigInput style='inputSmall'  type='text' maxlenght={10} placeholder=""/>
                    </div>
                    <table>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Endereço</th>
                        <th>Qntd.</th>
                        <th>Situação</th>
                    </tr>
                    <tr>
                        <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                         <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                        <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                    <tr>
                        <td>NOME DO CLIENTE</td>
                        <td>000.000.000-00</td>
                        <td>ENDEREÇO DO CLIENTE</td>
                        <td>35</td>
                        <td>LIBERADO</td>
                    </tr>
                </table>
                    <div className='boxCountClient'>
                        {count >= 2 &&
                        <Image type='arrowL' onClick={Minus} src={ArrowL}/>
                        }
                        <p className='count'>{count}</p>
                        <Image type='arrowR' onClick={More} src={ArrowR}/>
                    </div>
                </div>
            </div>
        </section>
    )
}