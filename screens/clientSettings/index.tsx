import './style.css'
import { SideBar } from "../../components/sideBar"
import { Menu } from "../../components/Menu"

export const ClientSettings = () => {
    return (
        <section>
            <div style={{display:'flex'}}>
                <Menu/>
                <SideBar/>
                <main className="boxSettings">
                    <div className='settings'>
                        <div className='background'>
                            <p>Produtos</p>
                        </div>
                    </div>
                    <div className='settings'>
                        <div className='background'>
                            <p>Promoções</p>
                        </div>
                    </div>
                    <div className='settings'>
                        <div className='background'>
                            <p>Cupons</p>
                        </div>
                    </div>
                    <div className='settings'>
                        <div className='background'>
                            <p id='departament'>Departamentos</p>
                        </div>
                    </div>
                    <div className='settings'>
                        <div className='background'>
                            <p>Flyers</p>
                        </div>
                    </div>
                    <div className='settings'>
                        <div className='background'>
                            <p id='marginWindow'>Tela</p>
                        </div>
                    </div>
                    <div id='marginLast' className='settings'>
                        <div className='background'>
                            <p>Outros</p>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}