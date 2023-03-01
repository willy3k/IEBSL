import React from 'react';
import { Container } from '../../style/GlobalStyles';
import { SecSobreLuluzinhas, SecInicio } from './styled';
import Footer from '../../components/Footer';

import luluzinhasC from '../../assets/img/luluzinhasC.jpg';
import luluzinhasI from '../../assets/img/luluzinhasI.jpeg';
import luluzinhasD from '../../assets/img/luluzinhasD.jpeg';
import luluzinhasZ from '../../assets/img/luluzinhasZ.jpeg';
import luluzinhas from '../../assets/img/luluzinhas.jpg';

export default function SobreLuluzinhas() {
  return (
    <Container>
      <SecInicio>
        <div className="fundo">
          <img src={luluzinhasC} alt="" />
          <div className="title">
            <span>LULUZINHAS</span>
            <h1>Nosso encontro de jovens Mulheres</h1>
          </div>
        </div>
      </SecInicio>
      <SecSobreLuluzinhas>
        <h2>Ministério das Luluzinhas</h2>
        <div className="card">
          <p>
            Ministério Com Jovens Mulheres. <br />
            Todas as sextas ás 6h, as meninas participam de um encontro. O
            objetivo desse encontro é ensinar a Bíblia, mostrando o amor de Deus
            e os ensinamentos de Sua Palavra.
          </p>
        </div>
        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={luluzinhas} alt="" />
            </div>
            <div className="desc">
              <h2>Congregação de Jovens Mulheres</h2>
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
              <h2>Paceio piquiniquer das Luluzinhas</h2>
              <p>
                Encontro diferente, Elas se reúniram, e marcaram de fazer um dia
                deferente, las elas não só se divertiram como também aprenderam,
                de Cristo.
              </p>
            </div>
            <div className="imge">
              <img src={luluzinhasD} alt="" />
            </div>
          </div>
        </div>

        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={luluzinhasZ} alt="" />
            </div>
            <div className="desc">
              <h2>Encontro das Luluzinhas na casa do Senhor</h2>
              <p>
                Encontro na casa de Senhor, compartilhando e aprendendo cada vez
                mais de Deus, e ensinando por qual caminho elas devem andar,
                juntas elas aprendem e ensinam umas as outras, com testemunhos e
                esperiencas de vida.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Encontro abençoado na Casa do Senhor</h2>
              <p>
                Esse Ministério assim como os outro, tem um papel muito
                importante pois é nesses momentos que elas se abrem pedem ajuda,
                pede conseilhos e assim ganhando a confiança umas das outras,
                para que assim possam crescer espiritualmente, e também Como
                mulheres de Deus, para que quando cheguer as adivercidades, elas
                saibem lhe da com elas, e assim permanesserem em cristo Jesus.
              </p>
            </div>
            <div className="imge">
              <img src={luluzinhasI} alt="" />
            </div>
          </div>
        </div>
      </SecSobreLuluzinhas>
      <Footer />
    </Container>
  );
}
