import React from 'react';
import { Container } from '../../style/GlobalStyles';
import sobre1 from '../../assets/img/sobre2.jpeg';

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
            HÁ 17 ANOS ATRÁS, A EQUIPE DE MISSÕES MINISTÉRIO RASE RESOLVEU
            VOLTAR AO VILAREJO DE SÃO LÁZARO 8 ANOS APÓS O PRIMEIRO CONTATO E A
            FORMAÇÃO DE UMA CONGREGAÇÃO QUE FICOU NA RESPONSABILIDADE DA IGREJA
            DE CUPIRA QUE NÃO DEU CONTINUIDADE AO TRABALHO E O MINBISTÉIO PAROU.
            <br />
            <br />
            RETORNANDO COM O MINISTÉRIO RASE UMA VEZ POR MÊS FAZENDO VISITAS,
            CULTO, ATIVIDADES COM CRIANÇAS E AÇÃO SOCIAL.
            <br />
            INICIAMOS UMA PARCERIA COM A ONG MINHA ESPERANÇA O QUAL SE ENCERROU
            EM 2012, O QUAL DEU-SE O INÍCIO DA IGREJA COM A FREQUENCIA E
            ORGANIZAÇÃO DAS ATIVIDADES COMO MINISTERIO INFANTIL, LOUVOR,
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
        <h2>Pastor</h2>
        <div className="fPastoral">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            illum repellendus pariatur nemo, id aut expedita voluptatibus non
          </p>
        </div>
      </SecPastoral>
      <SecFotosHistoricas>
        <h2>Vejá Algumas Fotos</h2>
      </SecFotosHistoricas>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
