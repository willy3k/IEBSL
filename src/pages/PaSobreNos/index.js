import React from 'react';
import { Container } from '../../style/GlobalStyles';
import sobre1 from '../../assets/img/sobre2.jpeg';

import { SecSobreNos, SecHistoria, Footerr } from './styled';

export default function PaSobreNos() {
  return (
    <Container>
      <SecSobreNos>
        <div className="fundo">
          <img src={sobre1} alt="" />
          <div className="title">
            <span>PROGRAMAÇÃO</span>
            <h1>Nossa Programação</h1>
          </div>
        </div>
      </SecSobreNos>
      <SecHistoria>
        <div>
          <h1>Ola</h1>
        </div>
      </SecHistoria>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
