import React from 'react';
import { Container } from '../../style/GlobalStyles';
import { SecSobreCriancas, SecInicio, Footerr } from './styled';
import sobreC from '../../assets/img/sobreC.jpeg';
import EBD from '../../assets/img/diaEBD.jpeg';
import ebdNaPratica from '../../assets/img/ebdNaPratica.jpeg';
import ensinando from '../../assets/img/ensinando.jpeg';
import diaPascoa from '../../assets/img/diaPascoa.jpeg';

export default function SobreCriancas() {
  return (
    <Container>
      <SecInicio>
        <div className="fundo">
          <img src={sobreC} alt="" />
          <div className="title">
            <span>EBD da Crianças</span>
            <h1>
              Nossa <samp>EBD</samp> das Crianças
            </h1>
          </div>
        </div>
      </SecInicio>
      <SecSobreCriancas>
        <h2>Ministério de Crianças</h2>
        <div className="card">
          <p>
            Ministério com crianças chamado de ebd. <br />
            Durante o sábado pela manhã, as crianças participam de uma aula. O
            objetivo dessa aula é ensinar a Bíblia em uma linguagem que as
            crianças tenham maior facilidade de entender, mostrando o amor de
            Deus e os ensinamentos de Sua Palavra.
          </p>
        </div>
        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={EBD} alt="" />
            </div>
            <div className="desc">
              <h2>Escola Biblica</h2>
              <p>
                Escola Biblica das Nossas crianças, todos os sabádos, tem essa
                aula, que ensina da maneira simples e pratica, que elas venha a
                entender e aprender cada vez mais que Deus é o salvador, que ele
                é o omega e alfa(começo e o fim), e que todas as coisas foram
                feitas por ele, e que desse forma elas possa aprender e logo
                conseguir suas familias para cristo.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>EBD Na pratica</h2>
            </div>
            <div className="imge">
              <img src={ebdNaPratica} alt="" />
            </div>
          </div>
        </div>

        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={ensinando} alt="" />
            </div>
            <div className="desc">
              <h2>Aprendendo Os Livros da Biblias</h2>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Ganhando Ovo da Pascoa</h2>
            </div>
            <div className="imge">
              <img src={diaPascoa} alt="" />
            </div>
          </div>
        </div>
      </SecSobreCriancas>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
