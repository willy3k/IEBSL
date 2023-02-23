import React from 'react';
import sevis from '../../assets/img/sevirse.jpeg';
import { SectServ } from './styled';

export default function Serviços() {
  return (
    <div>
      <SectServ>
        <div className="servi">
          <img src={sevis} alt="" />
        </div>
      </SectServ>
    </div>
  );
}
