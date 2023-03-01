import styled from 'styled-components';
import * as colors from '../../config/colors';

export const SecSobreNos = styled.section`
  width: 100%;
  background: black;

  .fundo {
    display: flex;
    position: relative;
    width: 100%;
    color: white;
  }

  img {
    background: black;
    opacity: 0.4;
    width: 100%;
    height: 450px;
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    margin-top: 10rem;
    transition: 1s;
  }
  span {
    font-size: 20px;
    margin-bottom: 5px;
  }
  h1 {
    text-align: center;
    font-size: 50px;
  }

  @media (max-width: 900px) {
    width: 100%;
    background: black;
    height: 250px;

    img {
      background: black;
      opacity: 0.3;
      width: 100%;
      height: 250px;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      margin-top: 5rem;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
  }
`;

export const SecHistoria = styled.section`
  border: 1px solid red;
`;

export const Footerr = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primaryDarkColor};
  color: white;
  padding: 30px;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 10px;
  }
`;
