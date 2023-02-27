import React from 'react';
import { Container } from '../../style/GlobalStyles';

import { SecContato, Footerr } from './styled';

export default function PaContato() {
  return (
    <Container>
      <SecContato>
        <h1>Entre em Contato</h1>
        <form>
          <label htmlFor="nome">
            Nome
            <input type="text" name="nome" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="textare" />
          </label>
          <label htmlFor="assunto">
            Assunto
            <input type="text" name="assunto" />
          </label>
          <label htmlFor="textare">
            Sua mensagem
            <textarea name="textare" cols="30" rows="10" />
          </label>
          <button type="submit">Enviar</button>
        </form>
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
