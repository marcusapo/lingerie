import './style.css'
import { ViewButton } from '../../components/viewButton'
import { SideBar } from '../../components/sideBar'
import { Menu } from '../../components/Menu'
import { Input } from '../../components/Input'

export const ProductInsert = () => {
    return (
        <body>
            <div className='storage'>
                <SideBar/>
                <Menu/>
                <div>
                    <div className='boxCadaster'>
                        <h1>Cadastro de Produto</h1>
                        <div className='boxButton'>
                            <ViewButton text='Cancelar'/>
                            <ViewButton id='buttonAdd' text='Salvar'/>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className='boxPhotos'>
                            <div className='bigPhoto'>Sem imagem</div>
                            <div className='boxSmallPhoto'>
                                <div className='smallPhoto'></div>
                                <div className='smallPhoto'></div>
                                <div className='smallPhoto'></div>
                                <div className='smallPhoto'></div>
                            </div>
                        </div>
                        <div className='boxInput'>
                            <p>Código</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                        <div className='boxInput'>
                            <p>Cod. barras</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                        <div id='marginL' className='boxCheckbox'>
                            <p>+18</p>
                            <Input placheHolder='' style='checkbox' type='checkbox'/>
                        </div>
                        <div className='boxCheckbox'>
                            <p>Inativar</p>
                            <Input placheHolder='' style='checkbox' type='checkbox'/>
                        </div>
                    </div>
                    <div className='midTop'>
                        <div className='boxInput'>
                                <p>Nome do Produto</p>
                                <Input style='inputBig' placheHolder=''/>
                        </div>
                        <div className='boxInput'>
                                <p>Estoque</p>
                                <Input style='inputCadaster' placheHolder=''/>
                        </div>
                    </div>
                    <div className='midDown'>
                        <div className='boxInput'>
                            <p>Cores</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                        <div className='boxInput'>
                            <p>Tamanhos</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                        <div className='boxInput'>
                            <p>Modelos</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                        <div className='boxInput'>
                            <p>Grupo</p>
                            <Input style='inputCadaster' placheHolder=''/>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <h2>Detalhes adicionais</h2>
                        <p id='more'>+</p>
                    </div>
                    <div className='midTop'>
                            <div className='boxInput'>
                                    <p>Campo</p>
                                    <Input style='medInput' placheHolder=''/>
                            </div>
                            <div className='boxInput'>
                                    <p>Valor</p>
                                    <Input style='medInput' placheHolder=''/>
                            </div>
                    </div>
                    <div className='boxInput'>
                        <p style={{marginTop:-40}}>Descrição</p>
                        <Input placheHolder='' style='enormInput'/>
                    </div>
                </div>
            </div>
        </body>
    )
}