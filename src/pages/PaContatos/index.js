import React from 'react';
import { Container } from '../../style/GlobalStyles';

import { SecContato, Footerr } from './styled';

export default function PaContato() {
  return (
    <Container>
      <SecContato>
        <h2>Contato</h2>
      </SecContato>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
