import './style.css'
import { useState, useEffect } from 'react';
import {Image} from '../Image'


export const Menu = () => {

  const menuIcon = require('../../assets/menuIcon.png')

  const[expanded, setExpanded] = useState(false)
  
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
            <header className={scrollY > 0 ? 'scrolled' : ''} id={`menu ${'expanded'}`}>
                <div className='textMenu'>
                  <Image src={menuIcon} type='unic'/>
                  {expanded && <div>salve</div>}
                      <p id='P1'>Inicio</p>
                      <p id='P2'>Carrinho</p>
                      <p id='P3'>Forum</p>
                      <p id='P4'>Painel De Controle</p>
                </div>
                <div className='indexBox'>
                  <div className='F2'>
                      <p>+18</p>
                  </div>
                    <div className='boxMenu'></div>
                    <div className='boxMenu'></div>
                    <div className='boxMenu'></div>
                </div>
            </header>
    )
} 