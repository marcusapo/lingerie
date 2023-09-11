import './style.css'
import { SideBar } from '../../components/sideBar'
import { Menu } from '../../components/Menu'
import { ViewButton } from '../../components/viewButton'

export const ProductsCadaster = () => {
    return (
        <body>
            <div style={{display:'flex'}}>
                <SideBar/>
                <Menu/>
                <div>
                <div style={{display:'flex', marginTop:150,gap:630, marginLeft:20}}>
                    <h1>Lista de produtos</h1>
                    <ViewButton id='buttonAdd' text='Adicionar'/>
                </div>
                <table>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Qntd.</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td></td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>0000000000</td>
                        <td>NOME DO PRODUTO</td>
                        <td>9999</td>
                        <td> </td>
                    </tr>
                </table>
                </div>
            </div>
        </body>
    )
}