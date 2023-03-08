import React from 'react';
import { Container } from '../../style/GlobalStyles';

import { SecSobreNos, SecProgramaçao, Footerr } from './styled';

export default function PaDaProgramacao() {
  return (
    <Container>
      <SecSobreNos>
        <div className="fundo">
          {/* <div className="fundo2">
            <div className="stars" />
          </div> */}
          <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div>
          {/* <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div>
          <div className="fundo2">
            <div className="stars" />
          </div> */}

          {/* <img src={fundo} alt="" /> */}
          <div className="title">
            <span>PROGRAMAÇÃO</span>
            <h1>Nossa Programação</h1>
          </div>
        </div>
      </SecSobreNos>
      {/*  */}
      <SecProgramaçao>
        <div className="card">
          <div className="dia">
            <h2>Domingo</h2>
            <button type="submit">
              <samp>+</samp>
            </button>
          </div>
          <div className="eventos">
            <h3>
              <span>08:00</span> EBD Escola Bíblica Dominical
            </h3>
          </div>
        </div>
        <div className="card">
          {' '}
          <div className="dia">
            <h2>Quarta</h2>
            <button type="submit">
              <samp>+</samp>
            </button>
          </div>
          <div className="eventos">
            <h3>
              <span>06:00</span> Culto de Oração
            </h3>
          </div>
        </div>
        <div className="card">
          {' '}
          <div className="dia">
            <h2>Sexta-feira</h2>
            <button type="submit">
              <samp>+</samp>
            </button>
          </div>
          <div className="eventos">
            <h3>
              <span>06:00</span> Encontro Das Luluzinhas
            </h3>
            <h3>
              <span>06:30</span> Encontro Dos Bolinhas
            </h3>
          </div>
        </div>
        <div className="card">
          {' '}
          <div className="dia">
            <h2>Sabádo</h2>
            <button type="submit">
              <samp>+</samp>
            </button>
          </div>
          <div className="eventos">
            <h3>
              <span>10:00</span> EBD Escola Bíblica Dominical Das Crianças
            </h3>
            <h3>
              <span>06:30</span> Culto de Adoração
            </h3>
          </div>
        </div>
      </SecProgramaçao>
      {/*  */}
      <Footerr>
        <footer>
          <h4>@ Igreja Evangelica Batista Em São Lazaro </h4>
          <h5>IEBSL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
