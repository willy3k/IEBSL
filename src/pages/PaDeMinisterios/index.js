import React from 'react';
import { Container } from '../../style/GlobalStyles';
import Footer from '../../components/Footer';
import criaças from '../../assets/img/crianças.jpeg';
import perolas from '../../assets/img/perolas.jpeg';
import luluzinhas from '../../assets/img/luluzinhas.jpg';
import bolinhas from '../../assets/img/bolinhas.jpg';

import { Crianças, Perolas, Luluzinhas, Bolinhas } from './styled';

export default function PaDeMinisterios() {
  return (
    <Container>
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
              Ministério voltado para mulheres, que tem como objetivo
              desenvolver a unidade, crescimento pessoal e, principalmente,
              crescimento em Jesus. Os nossos encontros ocorrem toda sabádos às
              2h.
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
              Ministério voltado para Jovens mulheres, que tem como objetivo
              desenvolver a unidade, crescimento pessoal e, principalmente,
              crescimento em Jesus. Os nossos encontros ocorrem toda as
              sexta-feira às 18h.
            </span>
          </div>
        </div>
      </Luluzinhas>
      <Bolinhas>
        <div className="bolinhas">
          <div className="descr">
            <h2>Encontro dos Bolinhas</h2>
            <span>
              Ministério voltado para homens, que tem como objetivo desenvolver
              a unidade, crescimento pessoal e, principalmente, crescimento em
              Jesus. Os nossos encontros ocorrem todo sexta ás 18h30.
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
