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
          <h2>Igreja Batista Evangelica Em São Lazaro</h2>
          <p>
            Fundada em 7 de dezembro 1942, a Igreja Batista do Fragata tem sido
            instrumento de proclamação do evangelho e edificação dos cristãos na
            cidade de Pelotas.
          </p>{' '}
          <br />
          <p>
            Somos filiados a Convenção Batista Brasileira e estamos localizados
            na Av. Duque de Caxias, 565 – Bairro Fragata – Pelotas / RS.
          </p>
        </div>
        <div className="img">
          <img src={Sobre} alt="" />
        </div>
      </div>
    </Sectionc>
  );
}
