import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink.js';

function Menu() {
    return (
      <div>
       <nav className='Menu'>
        <a href="/" alt="">
         <img className='Logo' src={Logo} alt="" /> 
        </a>
        <ButtonLink className="ButtonLink" href="/cadastro/video" as='a'>Criar Vídeo</ButtonLink>
       </nav>
      </div>
    );
  }



export default Menu;