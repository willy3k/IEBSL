import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/img/logo.jpeg';

import { Nav } from './styled';

export default function Header() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('response_nav');
  };
  return (
    <Nav>
      <div className="log">
        <img src={logo} alt="" />
      </div>
      <header>
        <nav ref={navRef}>
          <a href="/">Inicio</a>
          <a href="/PaDeMinisterios">Ministérios</a>
          <a href="/PaDaProgramacao">Programação</a>
          <a href="/PaSobreNos">Sobre nós</a>
          <a href="/PaContatos">Contato</a>

          <button
            className="nav-btn nav-close-btn"
            type="submit"
            onClick={showNavBar}
          >
            <FaTimes size={40} />
          </button>
        </nav>
        <button className="nav-btn " type="submit" onClick={showNavBar}>
          <FaBars size={40} />
        </button>
      </header>
    </Nav>
  );
}
