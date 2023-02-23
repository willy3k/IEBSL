import React from 'react';
import { Container } from '../../style/GlobalStyles';

import { SecSobreNos, Footerr } from './styled';

export default function PaDaProgramacao() {
  return (
    <Container>
      <SecSobreNos>
        <h2>Sobre-Nós</h2>
      </SecSobreNos>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
