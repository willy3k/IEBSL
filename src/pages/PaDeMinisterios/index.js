import React from 'react';
import { Container } from '../../style/GlobalStyles';
import fundo from '../../assets/img/fundoMI.jpeg';
import criaças from '../../assets/img/crianças.jpeg';
import perolas from '../../assets/img/perolas.jpeg';
import luluzinhas from '../../assets/img/luluzinhas.jpg';
import bolinhas from '../../assets/img/bolinhas.jpg';
import Footer from '../Components/Footer';

import { SecFundo, Crianças, Perolas, Luluzinhas, Bolinhas } from './styled';

export default function PaDeMinisterios() {
  return (
    <Container>
      <SecFundo>
        <div className="fundo">
          <img src={fundo} alt="" />
          <div className="title">
            <span>ministérios</span>
            <h1>Conheça Nossos Ministérios</h1>
          </div>
        </div>
      </SecFundo>
      <Crianças>
        <div className="crianças">
          <div className="imge">
            <img src={criaças} alt="" />
          </div>
          <div className="descr">
            <h2>EBD Crianças</h2>
            <span>
              Ministério voltado para crianças que pensa não só na formação de
              uma geração futura, mas que investe na geração do agora.
              Entendendo que a igreja não é um centro recreativo, mas um lugar
              também de crescimento espiritual na vida dos mais novos, a EBD
              segue com a missão de alcançar todas as crianças e suas famílias
              para Jesus.
            </span>
          </div>
        </div>
      </Crianças>
      {/*  */}
      <Perolas>
        <div className="perolas">
          <div className="descr">
            <h2>Encontro das Perolas</h2>
            <span>
              Ministério voltado para mulheres, que procura desenvolver a
              unidade, crescimento pessoal e, principalmente, crescimento em
              Jesus. Os nossos encontros ocorrem todos os sábados às 2h.
            </span>
          </div>
          <div className="imge">
            <img src={perolas} alt="" />
          </div>
        </div>
      </Perolas>
      {/*  */}
      <Luluzinhas>
        <div className="luluzinhas">
          <div className="imge">
            <img src={luluzinhas} alt="" />
          </div>
          <div className="descr">
            <h2>Luluzinhas</h2>
            <span>
              Ministério voltado para Jovens mulheres, que procura desenvolver a
              unidade, crescimento pessoal e, principalmente, crescimento em
              Jesus. Os nossos encontros ocorrem todas as sexta-feira às 18h.
            </span>
          </div>
        </div>
      </Luluzinhas>
      <Bolinhas>
        <div className="bolinhas">
          <div className="descr">
            <h2>Encontro dos Bolinhas</h2>
            <span>
              Ministério voltado para homens, cujo objetivo é desenvolver a
              unidade, crescimento pessoal e, principalmente, crescimento em
              Jesus. Os nossos encontros ocorrem todo sexta às 18h30.
            </span>
          </div>
          <div className="imge">
            <img src={bolinhas} alt="" />
          </div>
        </div>
      </Bolinhas>
      <Footer />
    </Container>
  );
}
