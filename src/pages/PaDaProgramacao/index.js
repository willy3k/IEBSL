import React from 'react';
import Footer from '../../components/Footer';
import { Container } from '../../style/GlobalStyles';
// import fundo from '../../assets/img/fundo3.jpeg';

import { SecSobreNos, SecProgramaçao } from './styled';

export default function PaDaProgramacao() {
  return (
    <Container>
      <SecSobreNos>
        <div className="fundo">
          {/* <div className="fundo2">
            <div className="kstars" />
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
              <span>10:00</span> EBD Escola Biblica Dominical Das Crianças
            </h3>
            <h3>
              <span>06:30</span> Culto de Adoração
            </h3>
          </div>
        </div>
        <div className="card">
          <div className="dia">
            <h2>Domingo</h2>
            <button type="submit">
              <samp>+</samp>
            </button>
          </div>
          <div className="eventos">
            <h3>
              <span>08:00</span> EBD Escola Biblica Dominical
            </h3>
          </div>
        </div>
      </SecProgramaçao>
      {/*  */}
      <Footer />
    </Container>
  );
}
