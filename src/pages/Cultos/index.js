import React from 'react';

import { Sectionc } from './styled';

export default function Cultos() {
  return (
    <Sectionc>
      <h2>Cultos</h2>
      <section>
        <div className="cards">
          <h3>Quarta</h3>
          <div className="cultos">
            <div className="ct">
              <span>Culto de oração</span>
              <span>6h30</span>
            </div>
          </div>
        </div>
        <div className="cards">
          <h3>Sexta</h3>
          <div className="cultos">
            <div className="ct">
              <span>Encontro das Luluzinhas</span>
              <span>6h</span>
            </div>
            <div className="ct">
              <span>Encontro dos Bolinhas</span>
              <span>6h30</span>
            </div>
          </div>
        </div>
        <div className="cards">
          <h3>Sábador</h3>
          <div className="cultos">
            <div className="ct">
              <span>EBD das Criaças</span>
              <span>10h</span>
            </div>
            <div className="ct">
              <span>Encontro das Perolas</span>
              <span>2h</span>
            </div>
            <div className="ct">
              <span>Culto</span>
              <span>6h30</span>
            </div>
          </div>
        </div>
      </section>
    </Sectionc>
  );
}
