import React from 'react';

import fundo from '../../assets/img/fundo3.jpeg';
import Ministerio from '../Components/Ministerios';
import Cultos from '../Components/Cultos';
import Sobre from '../Components/Sobre';
import Serviços from '../Components/Serviços';
import Footer from '../Components/Footer';

import { Container } from '../../style/GlobalStyles';
import { Fundo } from './styled';

export default function Main() {
  return (
    <Container>
      <Fundo>
        <div className="div-fundo">
          <img src={fundo} alt="" />
          <div className="Chamada">
            <h1>Venha nos visitar!</h1>
            <span>Panelas,PE, são lazaro</span>
            <a
              href="https://www.instagram.com/ieb.saolazaro/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="submit">Instagram</button>
            </a>
            <h3>Role a página para mais informaçõe</h3>
          </div>
        </div>
      </Fundo>
      <Ministerio />
      <Cultos />
      <Sobre />
      <Serviços />
      <Footer />
    </Container>
  );
}
