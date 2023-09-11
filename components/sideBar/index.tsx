import './style.css'

export const SideBar = () => {
    return (
        <div className='box'>
            <div className='textSideBar'>
                <div>
                    <p id='dashMargin'>Dashboard</p>
                </div>
                <div>
                    <p>Ajustes</p>
                </div>
                <div>
                    <p>Clientes</p>
                </div>
                <div>
                    <p>Vendas</p>
                </div>
                <div>
                    <p>Relatórios</p>
                </div>
            </div>
        </div>
    )
}