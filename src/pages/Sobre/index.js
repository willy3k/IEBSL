import React from 'react';
// import { FaUserAlt, FaUserTie } from 'react-icons/fa';
// import { HiUserGroup } from 'react-icons/hi';
import Sobre from '../../assets/img/fundo.jpg';

import { Sectionc } from './styled';

export default function Ministerio() {
  return (
    <Sectionc>
      <div className="center">
        <div className="descri">
          <h3>Quem Nós somos</h3>
          <h2>Igreja Evangelica Batista Em São Lazaro</h2>
          <p>
            HÁ 17 ANOS ATRÁS, A EQUIPE DE MISSÕES MINISTÉRIO RASE RESOLVEU
            VOLTAR AO VILAREJO DE SÃO LÁZARO 8 ANOS APÓS O PRIMEIRO CONTATO E A
            FORMAÇÃO DE UMA CONGREGAÇÃO QUE FICOU NA RESPONSABILIDADE DA IGREJA
            DE CUPIRA QUE NÃO DEU CONTINUIDADE AO TRABALHO E O MINBISTÉIO PAROU,
            RETORNANDO COM O MINISTÉRIO RASE UMA VEZ POR MÊS FAZENDO VISITAS,
            CULTO, ATIVIDADES COM CRIANÇAS E AÇÃO SOCIAL. INICIAMOS UMA PARCERIA
            COM A ONG MINHA ESPERANÇA O QUAL SE ENCERROU EM 2012, O QUAL DEU-SE
            O INÍCIO DA IGREJA COM A FREQUENCIA E ORGANIZAÇÃO DAS ATIVIDADES
            COMO MINISTERIO INFANTIL, LOUVOR, COREOGRAFIA, TEATRO, DIACONATO, OS
            GRUPOS PEQUENOS E ORGANIZAÇÕES. APÓS 3 ANOS, O ENTÃO MISSIONÁRIO,
            FOI ACLAMADO PASTOR DE NOSSA IGREJA, MUDANDO ASSIM DE CONGREGAÇÃO
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
