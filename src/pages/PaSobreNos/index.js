import React from 'react';
import { Container } from '../../style/GlobalStyles';
import sobre1 from '../../assets/img/sobre2.jpeg';
import pastor from '../../assets/img/pastor.jpeg';
import missionaria from '../../assets/img/missionaria.jpeg';
import filha1 from '../../assets/img/filha1.jpeg';
import filha2 from '../../assets/img/filha2.jpeg';

import {
  SecSobreNos,
  SecHistoria,
  SecPastoral,
  SecFotosHistoricas,
  Footerr,
} from './styled';

export default function PaSobreNos() {
  return (
    <Container>
      <SecSobreNos>
        <div className="fundo">
          <img src={sobre1} alt="" />
          <div className="title">
            <span>SOBRE-NÓS</span>
            <h1>Conheça Nossa História</h1>
          </div>
        </div>
      </SecSobreNos>
      <SecHistoria>
        {' '}
        <h1>Nossa História</h1>
        <div className="historia">
          <p>
            {' '}
            HÁ 17 ANOS, A EQUIPE DE MISSÕES MINISTÉRIO RASE RESOLVEU VOLTAR AO
            VILAREJO DE SÃO LÁZARO 8 ANOS APÓS O PRIMEIRO CONTATO E A FORMAÇÃO
            DE UMA CONGREGAÇÃO QUE FICOU NA RESPONSABILIDADE DA IGREJA DE CUPIRA
            QUE NÃO DEU CONTINUIDADE AO TRABALHO E O MINISTÉRIO PAROU.
            <br />
            <br />
            RETORNANDO COM O MINISTÉRIO RASE UMA VEZ POR MÊS FAZENDO VISITAS,
            CULTO, ATIVIDADES COM CRIANÇAS E AÇÃO SOCIAL.
            <br />
            INICIAMOS UMA PARCERIA COM A ONG MINHA ESPERANÇA O QUAL SE ENCERROU
            EM 2012, O QUAL DEU-SE O INÍCIO DA IGREJA COM A FREQUÊNCIA E
            ORGANIZAÇÃO DAS ATIVIDADES COMO MINISTÉRIO INFANTIL, LOUVOR,
            COREOGRAFIA, TEATRO, DIACONATO, OS GRUPOS PEQUENOS E ORGANIZAÇÕES.
            <br />
            <br />
            APÓS 3 ANOS, O ENTÃO MISSIONÁRIO, FOI ACLAMADO PASTOR DE NOSSA
            IGREJA, MUDANDO ASSIM DE CONGREGAÇÃO EVANGÉLICA BATISTA EM SÃO
            LÁZARO PARA <span> IGREJA EVANGÉLICA BATISTA EM SÃO LÁZARO</span>, A
            QUAL PERMANECE ATÉ A VOLTA DE CRISTO.
          </p>
        </div>
      </SecHistoria>
      <SecPastoral>
        <h2>Família Pastoral</h2>
        <div className="fPastoral">
          <div className="pastor">
            <h3>Pastor</h3>
            <div className="imgs">
              <img src={pastor} alt="" />
            </div>
          </div>
          <div className="missionaria">
            <h3>Missionária</h3>
            <div className="imgs">
              <img src={missionaria} alt="" />
            </div>
          </div>
          <div className="filhas">
            <h3>Alice filha</h3>
            <div className="imgs">
              <img src={filha1} alt="" />
            </div>
          </div>
          <div className="filhas">
            <h3>Carol filha</h3>
            <div className="imgs">
              <img src={filha2} alt="" />
            </div>
          </div>
        </div>
      </SecPastoral>
      <SecFotosHistoricas>
        <h2>Vejá Algumas Fotos</h2>
        <div className="cards-Photos">
          <div className="photos">
            <img src="" alt="" />
          </div>
          <div className="photos">
            <img src="" alt="" />
          </div>
          <div className="photos">
            <img src="" alt="" />
          </div>
          <div className="photos">
            <img src="" alt="" />
          </div>
          <div className="photos">
            <img src="" alt="" />
          </div>
        </div>
      </SecFotosHistoricas>
      <Footerr>
        <footer>
          <h4>@ Igreja Evangelica Batista Em São Lazaro </h4>
          <h5>IEBSL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
