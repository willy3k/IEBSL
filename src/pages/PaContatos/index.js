import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { Container } from '../../style/GlobalStyles';
import Footer from '../../components/Footer';

import { SecContato } from './styled';

export default function PaContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (nome === '' || email === '' || assunto === '' || mensagem === '') {
      toast.error('Preencha todos os campos');
      return;
    }

    const tamplateParams = {
      from_name: nome,
      email,
      assunto,
      message: mensagem,
    };

    emailjs
      .send(
        'service_r6lxk85',
        'template_i8o8b4n',
        tamplateParams,
        'tr8D4E5hVcpIiaxOc'
      )
      .then(
        (response) => {
          // eslint-disable-next-line no-console
          console.log('Email Enviado', response.status, response.text);
          setNome('');
          setEmail('');
          setAssunto('');
          setMensagem('');
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log('Error: ', err);
        }
      );
  }
  return (
    <Container>
      <SecContato>
        <h1>Entre em Contato</h1>
        <form onSubmit={sendEmail}>
          <label htmlFor="nome">
            Nome
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome..."
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="textare"
              placeholder="Digite seu email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="assunto">
            Assunto
            <input
              type="text"
              name="assunto"
              placeholder="Sobre o que quer falar?"
              onChange={(e) => setAssunto(e.target.value)}
              value={assunto}
            />
          </label>
          <label htmlFor="textare">
            Sua mensagem
            <textarea
              name="textare"
              cols="30"
              rows="10"
              placeholder="Escreva sua mensagem..."
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </SecContato>
      <Footer />
    </Container>
  );
}
