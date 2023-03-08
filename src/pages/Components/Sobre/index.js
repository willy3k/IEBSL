import React from 'react';
// import { FaUserAlt, FaUserTie } from 'react-icons/fa';
// import { HiUserGroup } from 'react-icons/hi';
import Sobre from '../../../assets/img/fundo.jpg';

import { Sectionc } from './styled';

export default function Ministerio() {
  return (
    <Sectionc>
      <div className="center">
        <div className="descri">
          <h3>Quem Nós somos</h3>
          <h2>Igreja Evangélica Batista Em São Lázaro</h2>
          <p>
            HÁ 17 ANOS, A EQUIPE DE MISSÕES MINISTÉRIO RASE RESOLVEU VOLTAR AO
            VILAREJO DE SÃO LÁZARO 8 ANOS APÓS O PRIMEIRO CONTACTO E A FORMAÇÃO
            DE UMA CONGREGAÇÃO QUE FICOU NA RESPONSABILIDADE DA IGREJA DE
            CULPIRA QUE NÃO DEU CONTINUIDADE AO TRABALHO E O MINISTÉRIO PAROU,
            RETORNANDO COM O MINISTÉRIO RASE UMA VEZ POR MÊS FAZENDO VISITAS,
            CULTO, ATIVIDADES COM CRIANÇAS E AÇÃO SOCIAL. INICIAMOS UMA PARCERIA
            COM A ONG MINHA ESPERANÇA O QUAL SE ENCERROU EM 2012, O QUAL DEU-SE
            O INÍCIO DA IGREJA COM A FREQUÊNCIA E ORGANIZAÇÃO DAS ATIVIDADES
            COMO MINISTÉRIO INFANTIL, LOUVOR, COREOGRAFIA, TEATRO, DIÁCONO, OS
            GRUPOS PEQUENOS E ORGANIZAÇÕES. APÓS 3 ANOS, O ENTÃO MISSIONÁRIO,
            FOI ACLAMADO PASTOR DA NOSSA IGREJA, MUDANDO ASSIM DE CONGREGAÇÃO
            EVANGÉLICA BATISTA EM SÃO LÁZARO PARA IGREJA EVANGÉLICA BATISTA EM
            SÃO LÁZARO, A QUAL PERMANECE ATÉ A VOLTA DE CRISTO.
          </p>{' '}
          <br />
        </div>
        <div className="img">
          <img src={Sobre} alt="" />
        </div>
      </div>
    </Sectionc>
  );
}
