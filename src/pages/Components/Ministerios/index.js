import React from 'react';
import { FaUserAlt, FaUserTie } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import UserFemale from '../../../assets/img/user-female.png';

import { Sectionc } from './styled';

export default function Ministerio() {
  return (
    <Sectionc>
      <h2 className="title">Ministérios</h2>
      <span>Conheça os ministérios da nossa igreja:</span>

      <div className="section-ministerial">
        <div className="card">
          <FaUserAlt className="i" />
          <h2>Crianças</h2>
          <p>Todos os sábados, as 10h tem a EBD das Crianças</p>
          <a href="/SobreCriancas">
            <button type="submit">Saiba mais</button>
          </a>
        </div>
        <div className="card">
          <HiUserGroup className="i" />
          <h2>Perolas</h2>
          <p>
            Todos os sábados, as 2h temos o encontro das Mulheres, em lugares
            diferentes{' '}
          </p>
          <a href="/SobrePerolas">
            <button type="submit">Saiba mais </button>
          </a>
        </div>
        <div className="card">
          <img src={UserFemale} alt="" />
          <h2>Luluzinhas</h2>
          <p>
            O ministério de jovens mulheres, se reúne nas sextas, a cada 8 dias,
            as 6 horas.
          </p>
          <a href="/SobreLuluzinhas">
            <button type="submit">Saiba mais</button>
          </a>
        </div>
        <div className="card">
          <FaUserTie className="i" />
          <h2>Bolinhas</h2>
          <p>
            O Ministério de Homens, se reúne todas as sextas, em lugares
            diferentes, as 6h: 30 m.
          </p>
          <a href="/SobreBolinhas">
            <button type="submit">Saiba mais</button>
          </a>
        </div>
      </div>
    </Sectionc>
  );
}
