import React from 'react';
import { Container } from '../../style/GlobalStyles';
import { SecSobrePerolas, SecInicio, Footerr } from './styled';
import perolas from '../../assets/img/perolas.jpeg';
import perolas5 from '../../assets/img/perolas5.jpeg';
import perolas3 from '../../assets/img/perolas3.jpeg';
import perolas4 from '../../assets/img/perolas4.jpeg';

export default function SobrePerolas() {
  return (
    <Container>
      <SecInicio>
        <div className="fundo">
          <img src={perolas} alt="" />
          <div className="title">
            <span>PEROLAS</span>
            <h1>Nosso Ministérios De mulheres</h1>
          </div>
        </div>
      </SecInicio>
      <SecSobrePerolas>
        <h2>Ministério de Mulheres</h2>
        <div className="card">
          <p>
            Ministério com Mulheres Chamado de Perolas. <br />
            Durante o sábado pela tarde as 2h, as Mulheres participam de uma
            encontro. O objetivo desse encontro é ensinar a Bíblia,e mostrando o
            amor de Deus e aprender que justas São mais fortes.
          </p>
        </div>
        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={perolas} alt="" />
            </div>
            <div className="desc">
              <h2>Culto da Familía</h2>
              <p>
                Culto da familía, Esse dia foi maravilhoso, Nossas Perolas
                cantando, que dia inesquecivel, Deus sejá Louvado por essas
                Mulheres de Deus, esse grupo e uma benção em nossa igreja.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Encontro das perolas</h2>
              <p>
                Esse grupo de mulheres, é muito determinado, Elas não param, se
                Deus da uma missão a elas, elas não pensam duas vezes para
                fazer, estão em constante oração umas pelas as outras.
              </p>
            </div>
            <div className="imge">
              <img src={perolas3} alt="" />
            </div>
          </div>
        </div>

        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={perolas4} alt="" />
            </div>
            <div className="desc">
              <h2>Encontro na casa da irmão Fatma</h2>
              <p>
                Encontro abençoado na casa da irmão fatma, Uma visita abençoada,
                Como e bom momentos como esses, assim como os outros grupos,
                Deus fala grandemente na vida dessas bençãos.´Provébios 14:1 A
                mulher sábia edifica a suas casa, mais com as próprias mãos a
                insensata derruba a sua casa´.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Lanche das Perolas</h2>
              <p>
                Essas Perolas, são demais, todos os encontro depois, tem um
                lanchinho que uma delicia, depois de uma encontro abençoado,
                lanchar e conversa um pouco, por que isso trás, uma comunhão
                maravilhosa e saúdavel.
              </p>
            </div>
            <div className="imge">
              <img src={perolas5} alt="" />
            </div>
          </div>
        </div>
      </SecSobrePerolas>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
