import React from 'react';
import { Container } from '../../style/GlobalStyles';
import { SecSobreCriancas, SecInicio, Footerr } from './styled';
import sobreC from '../../assets/img/sobreC.jpeg';
import EBD from '../../assets/img/diaEBD.jpeg';
import ebdNaPratica from '../../assets/img/ebdNaPratica.jpeg';
import ensinando from '../../assets/img/ensinando.jpeg';
import diaPascoa from '../../assets/img/diaPascoa.jpeg';

export default function SobreCriancas() {
  return (
    <Container>
      <SecInicio>
        <div className="fundo">
          <img src={sobreC} alt="" />
          <div className="title">
            <span>EBD da Crianças</span>
            <h1>
              Nossa <samp>EBD</samp> das Crianças
            </h1>
          </div>
        </div>
      </SecInicio>
      <SecSobreCriancas>
        <h2>Ministério de Crianças</h2>
        <div className="card">
          <p>
            Ministério com crianças chamado de ebd. <br />
            Durante o sábado pela manhã, as crianças participam de uma aula. O
            objetivo dessa aula é ensinar a Bíblia em uma linguagem que as
            crianças tenham maior facilidade de entender, mostrando o amor de
            Deus e os ensinamentos de Sua Palavra.
          </p>
        </div>
        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={EBD} alt="" />
            </div>
            <div className="desc">
              <h2>Escola Biblica</h2>
              <p>
                Escola Biblica das Nossas crianças, todos os sabádos, tem essa
                aula, que ensina da maneira simples e pratica, que elas venha a
                entender e aprender cada vez mais que Deus é o salvador, que ele
                é o omega e alfa(começo e o fim), e que todas as coisas foram
                feitas por ele, e que desse forma elas possa aprender e logo
                conseguir suas familias para cristo.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>EBD Na pratica</h2>
              <p>
                Aprendendo Na pratica, atraves de ensenaçoes de passagem
                biblicas, para que assim eles possam aprendem atraves deles
                mesmos, usando a imaginaçoes deles, e assim poderem aprender
                cada vez mais de Cristo, e sem contar que e de uma forma
                divertida, e simples.
              </p>
            </div>
            <div className="imge">
              <img src={ebdNaPratica} alt="" />
            </div>
          </div>
        </div>

        <div className="card segundo">
          <div className="cards">
            <div className="imge">
              <img src={ensinando} alt="" />
            </div>
            <div className="desc">
              <h2>Aprendendo Os Livros da Biblias</h2>
              <p>
                Aprendendo os Livros da bíblia, De forma pratica, para o
                aprendizado tecnicos deles desde do inico, para que no futuro
                não tenha dificuldades nesse aspecto, sem conta que amplia os
                conhecimentos deles, e assim dispertando o interesse de querer
                saber o que esta escrito em cada livro e o que acontece neles.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="cards">
            <div className="desc">
              <h2>Ganhando Ovo da Pascoa</h2>
              <p>
                Dia de Presente, além de muita estudo, aprendizado e diverção,
                Presente, ove da pascoa.
              </p>
            </div>
            <div className="imge">
              <img src={diaPascoa} alt="" />
            </div>
          </div>
        </div>
      </SecSobreCriancas>
      <Footerr>
        <footer>
          <h4>@ Igreja Batista Evangelica Em São Lazaro </h4>
          <h5>IBESL</h5>
        </footer>
      </Footerr>
    </Container>
  );
}
