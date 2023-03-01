import React from 'react';
import { Container } from '../../style/GlobalStyles';
import Footer from '../../components/Footer';
import { SecSobreNos } from './styled';

export default function PaSobreNos() {
  return (
    <Container>
      <SecSobreNos>
        <h2>Sobre-Nós</h2>
      </SecSobreNos>
      <Footer />
    </Container>
  );
}
