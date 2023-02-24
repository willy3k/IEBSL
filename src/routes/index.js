import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Main from '../pages/Main';
import PaDeMinisterios from '../pages/PaDeMinisterios';
import PaDaProgramaçao from '../pages/PaDaProgramacao';
import PaSobreNos from '../pages/PaSobreNos';
import PaContatos from '../pages/PaContatos';

import SebreCriancas from '../pages/SobreCriancas';
import SobrePerolas from '../pages/SobrePerolas';
import SobreLuluzinhas from '../pages/SobreLuluzinhas';
import SobreBolinhas from '../pages/SobreBolinhas';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Main} />
      <MyRoute exact path="/PaDeMinisterios" component={PaDeMinisterios} />
      <MyRoute exact path="/PaDaProgramacao" component={PaDaProgramaçao} />
      <MyRoute exact path="/PaSobreNos" component={PaSobreNos} />
      <MyRoute exact path="/PaContatos" component={PaContatos} />

      <MyRoute exact path="/SobreCriancas" component={SebreCriancas} />
      <MyRoute exact path="/SobrePerolas" component={SobrePerolas} />
      <MyRoute exact path="/SobreLuluzinhas" component={SobreLuluzinhas} />
      <MyRoute exact path="/SobreBolinhas" component={SobreBolinhas} />
    </Switch>
  );
}
