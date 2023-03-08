import React from 'react';

import { SecEventos } from './styled';

import caminhada from '../../../assets/img/caminhada.jpeg';
import simposio from '../../../assets/img/simposio.jpeg';
import congressoJovens from '../../../assets/img/congressoJovens.jpeg';

export default function Eventos() {
  return (
    <SecEventos>
      <h1>Eventos Anuais</h1>
      <div className="P-eventos">
        <div className="caminhada">
          <div className="imgs">
            <img src={caminhada} alt="" />
          </div>
        </div>
        <div className="simposio">
          <div className="imgs">
            <img src={simposio} alt="" />
          </div>
        </div>
        <div className="congresso">
          <div className="imgs">
            <img src={congressoJovens} alt="" />
          </div>
        </div>
      </div>
    </SecEventos>
  );
}
