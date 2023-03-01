import React from 'react';
import { Container } from '../../style/GlobalStyles';
import Footer from '../../components/Footer';

import { SecSobrePerolas, SecInicio } from './styled';
import bolinhas from '../../assets/img/bolinhas.jpg';
import bolinhasI from '../../assets/img/bolinhasI.jpeg';
import encontroEdson from '../../assets/img/encontroEdson.jpeg';
import encontroZe from '../../assets/img/encontroZe.jpeg';
import encontroNaI from '../../assets/img/encontroNaI.jpeg';

export default function SobreBolinhas() {
  return (
    <Container>
      <SecInicio>
        <div className="fundo">
          <img src={bolinhas} alt="" />
          <div className="title">
            <span>BOLINHAS</span>
            <h1>Nosso Encontro dos Homens</h1>
          </div>
        </div>
      </SecInicio>
      <SecSobrePerolas>
        <h2>Ministério dos Homens</h2>
        <div className="card">
          <p>
            Ministério dos Homens chamado de os Bolinhas. <br />
            Todas as sextas as 6h30, os homens se reúnem para se edificar e se
            unir cada vez mais, para que assim tenham um crescimento espiritual
            e qualitativo,e o objetivo desses encontros e aprender cada vez mais
            de Deus e ensinar a Bíblia, para que assim possam se fortalecer cada
            vez mais,no espirito e também a comunhão uns com os outros.
          </p>
        </div>
        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={bolinhasI} alt="" />
            </div>
            <div className="desc">
              <h2>Congregação de Homens</h2>
              <p>
                Momento Depois de um congresso de joven, maravilho e muito
                edificante, Nesse congresso, aprendemos a ser como cristo, e o
                que devemos fazer a parti disso, Eu sou a Luz do Mundo e você?
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Encontro na Casa do irmão Edson</h2>
              <p>
                Enconto maravilhoso na casa do nosso irmão Edson, com palavra,
                bate papo e reflexão, para o crescimentos espiritual, com varios
                debates, e assim com muitos aprendizado.
              </p>
            </div>
            <div className="imge">
              <img src={encontroEdson} alt="" />
            </div>
          </div>
        </div>

        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={encontroZe} alt="" />
            </div>
            <div className="desc">
              <h2>Encontro na casa do irmão Zé</h2>
              <p>
                Encontro na casa do nosso irmão José Maria, Encontro abençoado
                por de mais, Deus fala constantemente nos coraçoes, pois é muito
                debate e reflexão, e compartilhamento de esperiencia, e assim
                ensinando e aprendendo, pois nossa vida é de constante
                aprendizado.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Encontro na Casa do Senhor</h2>
              <p>
                Encontro na casa do Senhor, Deus e maravilhoso, ele está falando
                constantemente, uma palavra que e muito sitade nesse encontro ,
                e que todos devemos levar para nossa vida,´precisamos estar
                sempre com os ouvidos sensiveis para ouvirmos a voz de Deus
                falando com nosco´.
              </p>
            </div>
            <div className="imge">
              <img src={encontroNaI} alt="" />
            </div>
          </div>
        </div>
      </SecSobrePerolas>
      <Footer />
    </Container>
  );
}
