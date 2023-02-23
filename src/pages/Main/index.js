import React from 'react';

import fundo from '../../assets/img/fundo3.jpeg';
import Ministerio from '../Ministerios';
import Cultos from '../Cultos';
import Sobre from '../Sobre';
import Serviços from '../Serviços';
import Footer from '../Footer';

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
            <button type="submit">Instagram</button>
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
